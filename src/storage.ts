import axios from 'axios';
import { Api } from "nocodb-sdk";
import { config } from './config';



 
// database
// stream_eth_id
// name
// description
// stream_eth_url
// playback_url
// download_url
// asset_id
// transcript
// num_speakers


// get all videos
// for each video
// get metadata
// get playback url
// transcribe video
// store in db

interface SocialLayerEvent {
  id: number;
  title: string;
  start_date: string;
  group_id: number;
}

interface NocoDBEvent {
  id?: string;
  social_layer_id: number;
  title: string;
  social_layer_url: string;
  doc_url?: string;
  doc_in_social_layer?: boolean;
}

// Initialize NocoDB API client
const nocoApi = new Api({
  baseURL: "https://app.nocodb.com",
  headers: {
    "xc-token": config.NOCODB_API_KEY
  }
});

// In-memory cache for performance
const eventCache: Set<number> = new Set();

export async function pollSocialLayer() {
  try {
    const events = await fetchUpcomingEvents();
    
    for (const event of events) {
      if (eventCache.has(event.id)) {
        continue;
      }

      // Check if event exists in NocoDB
      const existingEvent = await findEventInNocoDB(event.id);
      if (existingEvent) {
        eventCache.add(event.id);
        continue;
      }

      // Create Google Doc
      const docUrl = await generateDoc(`Edge Lanna: ${event.title}`);
      if (!docUrl) {
        const message = `Failed to generate doc for event ${event.id}`;
        console.error(message);
        Sentry.captureMessage(message);
        continue;
      }

      // Create event record in NocoDB
      const nocoEvent: NocoDBEvent = {
        social_layer_id: event.id,
        title: event.title,
        social_layer_url: `https://app.sola.day/event/detail/${event.id}`,
        doc_url: docUrl,
        doc_in_social_layer: false // Initialize as false
      };

      const nocoEventId = await createEventInNocoDB(nocoEvent);
      
      // Update social layer with the doc URL and track success
      const updateSuccess = await updateEventNotes(event.id, docUrl);
      if (updateSuccess) {
        // Update doc_in_social_layer status in NocoDB
        await nocoApi.dbTableRow.update(
          "noco",
          config.NOCODB_PROJECT_NAME,
          config.NOCODB_TABLE_ID,
          nocoEventId,
          { doc_in_social_layer: true }
        );
      }
      
      // Add to cache
      eventCache.add(event.id);
    }
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error in pollSocialLayer', error);
  }
}

async function findEventInNocoDB(socialLayerId: number): Promise<NocoDBEvent | null> {
  try {
    const response = await nocoApi.dbTableRow.list(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      {
        where: `(social_layer_id,eq,${socialLayerId})`
      }
    );
    return response.list?.[0] as NocoDBEvent | null;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error finding event in NocoDB');
    return null;
  }
}

async function createEventInNocoDB(event: NocoDBEvent): Promise<void> {
  try {
    const response = await nocoApi.dbTableRow.create(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      event
    );
    return response.Id;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error creating event in NocoDB');
    throw error;
  }
}

async function fetchUpcomingEvents(): Promise<SocialLayerEvent[]> {
  const params = new URLSearchParams({
    collection: 'upcoming',
    start_date: new Date().toISOString().split('T')[0],
    group_id: '3463',
    timezone: 'Asia/Bangkok',
    auth_token: config.SOCIAL_LAYER_AUTH_TOKEN
  });

  const response = await axios.get(`https://api.sola.day/event/list?${params}`);
  const filter: string[] = [];
  if (filter.length > 0) {  
    return response.data.events.filter((event: SocialLayerEvent) => filter.includes(event.id.toString()));
  }
  return response.data.events;
}

async function updateEventNotes(eventId: number, docUrl: string): Promise<boolean> {
  try {
    const params = new URLSearchParams({
      auth_token: config.SOCIAL_LAYER_AUTH_TOKEN,
      id: eventId.toString()
    });

    await axios.post(
      `https://api.sola.day/event/set_notes?${params}`,
      {
        notes: `Meeting notes: [Click here](${docUrl})`
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return true;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error updating event notes:', error);
    return false;
  }
}

