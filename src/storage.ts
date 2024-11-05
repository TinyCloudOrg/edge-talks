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
interface NocoDBEvent {
  id?: string;
  stream_eth_id: string;
  name: string;
  description: string;
  stream_eth_url: string;
  playback_url: string;
  download_url: string;
  asset_id: string;
  transcript: string;
  num_speakers: number;
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

// get all videos
  // store in db
    // stream_eth_id, name, description, stream_eth_url, playback_url, download_url, asset_id


// transcribe videos
  // get videos with no transcript
    // for each video
      // transcribe video
      // store in db



async function findVideoInNocoDB(streamEthId: string): Promise<NocoDBEvent | null> {
  try {
    const response = await nocoApi.dbTableRow.list(
      "noco", 
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      {
        where: `(stream_eth_id,eq,${streamEthId})`
      }
    );
    return response.list?.[0] as NocoDBEvent | null;
  } catch (error) {
    console.error('Error finding video in NocoDB:', error);
    return null;
  }
}

async function createVideoInNocoDB(video: NocoDBEvent): Promise<string> {
  try {
    const response = await nocoApi.dbTableRow.create(
      "noco",
      config.NOCODB_PROJECT_NAME, 
      config.NOCODB_TABLE_ID,
      video
    );
    return response.Id;
  } catch (error) {
    console.error('Error creating video in NocoDB:', error);
    throw error;
  }
}



