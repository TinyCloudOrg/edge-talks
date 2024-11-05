import { AssemblyAITranscriber } from './transcriber';
import { VideoMetadata } from './types';
import { config } from './config';
import fetch from 'node-fetch';
import fs from 'fs';
interface PaginatedResponse {
  status: string;
  message: string;
  data: {
    sessions: VideoMetadata[];
    totalDocuments: number;
    pageable: {
      page: number;
      size: number;
    }
  }
}

/**
 * Fetches the asset ID from StreamETH API using a session ID
 * @param sessionId The session ID from StreamETH URL
 * @returns The asset ID or null if not found
 */
export async function getMetadataFromSession(sessionId: string): Promise<VideoMetadata> {
    try {
        const response = await fetch(`https://api.streameth.org/sessions/${sessionId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        if (!data.data) {
            throw new Error('No data found');
        }
        
        // Return the assetId from the response
        return data.data;
        
    } catch (error) {
        console.error('Error fetching asset ID:', error);
        throw error;
    }
}

/**
 * Fetches the playback URL from StreamETH API using an asset ID
 * @param assetId The asset ID from StreamETH
 * @returns The playback URL or null if not found
 */
export async function getDownloadUrlFromAsset(assetId: string): Promise<string | null> {
    try {
        const response = await fetch(`https://api.streameth.org/streams/asset/${assetId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        
        // Return the playback URL from the response
        return data.data.downloadUrl || null;
        
    } catch (error) {
        console.error('Error fetching playback URL:', error);
        return null;
    }
}


async function getPlaybackUrlFromSession(sessionId: string): Promise<string | null> {
    const metadata = await getMetadataFromSession(sessionId);
    const {assetId} = metadata;
    if (!assetId) return null;
    
    return getDownloadUrlFromAsset(assetId);
}

// const sessionId = '6725d82df861dff095655a38';
// const playbackUrl = await getPlaybackUrlFromSession(sessionId);
// const transcript = await transcribeStream(playbackUrl || '');
// console.log(transcript);
// console.log(playbackUrl);


// transcribe the stream

async function transcribeStream(playbackUrl: string) {
    const apiKey = config.ASSEMBLYAI_API_KEY;
    const transcriber = new AssemblyAITranscriber(apiKey);
    
    if (!playbackUrl) {
        console.error('No playback URL found');
        return;
    }
    
    const transcriptResult = await transcriber.transcribe(playbackUrl);
    if (transcriptResult && transcriptResult.text) {
        console.log('Transcript:', transcriptResult.text);
        console.log('Number of speakers:', transcriptResult.num_speakers);
    }
    
    return transcriptResult;
}

/**
 * Fetches paginated video sessions from StreamETH API
 * @param page Page number (starts at 1)
 * @param size Number of items per page
 * @returns Paginated response with video sessions
 */
export async function getPaginatedSessions(page: number = 1, size: number = 12): Promise<PaginatedResponse> {
  try {
    const response = await fetch(
      `https://api.streameth.org/sessions?organization=edge_city&page=${page}&size=${size}&onlyVideos=true&published=true`,
      {
        headers: {
          'User-Agent': 'RapidAPI/4.2.7 (Macintosh; OS X/15.0.0) GCDHTTPRequest',
          'Connection': 'close',
          'Host': 'api.streameth.org'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching paginated sessions:', error);
    throw error;
  }
}

/**
 * Fetches all video sessions by making paginated requests until no more results
 * @returns Array of all video sessions
 */
export async function getAllSessions(): Promise<VideoMetadata[]> {
  try {
    let allSessions: VideoMetadata[] = [];
    let currentPage = 1;
    const pageSize = 10;
    let hasMoreResults = true;
    
    while (hasMoreResults) {
      const response = await getPaginatedSessions(currentPage, pageSize);
      const sessions = response.data.sessions;
      
      if (sessions.length === 0) {
        hasMoreResults = false;
      } else {
        allSessions = allSessions.concat(sessions);
        currentPage++;
      }
      
      // Optional: Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log(`Found ${allSessions.length} total sessions`);
    return allSessions;

  } catch (error) {
    console.error('Error fetching all sessions:', error);
    throw error;
  }
}

getAllSessions().then(sessions => {
  fs.writeFileSync('sessions.json', JSON.stringify(sessions, null, 2));
  console.log('Sessions written to sessions.json');
}).catch(error => {
  console.error('Error getting sessions:', error);
});


