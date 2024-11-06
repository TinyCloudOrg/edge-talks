import { Api } from "nocodb-sdk";
import { config } from './config';
import { getAllSessions, getDownloadUrlFromAsset } from './functions';
import { AssemblyAITranscriber } from './transcriber';

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

async function createVideoInNocoDB(video: Partial<NocoDBEvent>): Promise<string> {
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

async function storeAllVideos(): Promise<void> {
  try {
    // Get all videos from StreamETH
    const sessions = await getAllSessions();
    
    for (const session of sessions) {
      // Check if video already exists in NocoDB
      const existingVideo = await findVideoInNocoDB(session._id);
      if (existingVideo) {
        console.log(`Video ${session._id} already exists in database`);
        continue;
      }

      // Get playback URL
      const downloadUrl = await getDownloadUrlFromAsset(session.assetId);
      
      // Prepare video data
      const videoData: Partial<NocoDBEvent> = {
        stream_eth_id: session._id,
        name: session.name,
        description: session.description || '',
        stream_eth_url: `https://streameth.org/edge_city/watch?session=${session._id}`,
        playback_url: session.videoUrl || '',
        download_url: downloadUrl || '',
        asset_id: session.assetId,
      };

      // Store in NocoDB
      await createVideoInNocoDB(videoData);
      console.log(`Stored video ${session._id} in database`);
    }
  } catch (error) {
    console.error('Error storing videos:', error);
    throw error;
  }
}

async function getVideosWithoutTranscript(): Promise<NocoDBEvent[]> {
  try {
    const response = await nocoApi.dbTableRow.list(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      {
        where: `(transcript,eq,)`
      }
    );
    console.log(response)
    return response.list as NocoDBEvent[];
  } catch (error) {
    console.error('Error getting videos without transcript:', error);
    throw error;
  }
}

async function updateVideoTranscript(
  id: string, 
  transcript: string, 
  numSpeakers: number
): Promise<void> {
  try {
    await nocoApi.dbTableRow.update(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      id,
      {
        transcript,
        num_speakers: numSpeakers,
        auto_highlights: true
      }
    );
  } catch (error) {
    console.error('Error updating video transcript:', error);
    throw error;
  }
}

async function transcribeAllVideos(): Promise<void> {
  try {
    const transcriber = new AssemblyAITranscriber(config.ASSEMBLYAI_API_KEY);
    const videos = await getVideosWithoutTranscript();
    console.log(`Transcribing ${videos.length} videos...`);

    for (const video of videos) {
      if (!video.download_url) {
        console.log(`Skipping video ${video.id} - no download URL`);
        continue;
      }

      console.log(`Transcribing video ${video.id}...`);
      const transcriptResult = await transcriber.transcribe(video.download_url);
      // Save transcript result to file
      if (transcriptResult && transcriptResult.text) {
        const filename = `transcript-${video.id}.txt`;
        fs.writeFileSync(filename, transcriptResult.text);
        console.log(`Saved transcript to ${filename}`);
      }
      if (transcriptResult && transcriptResult.text) {
        await updateVideoTranscript(
          video.id!,
          transcriptResult.text,
          transcriptResult.num_speakers || 0
        );
        console.log(`Updated transcript for video ${video.id}`);
      }
    }
  } catch (error) {
    console.error('Error transcribing videos:', error);
    throw error;
  }
}

// Export the main functions
export {
  storeAllVideos,
  transcribeAllVideos,
  findVideoInNocoDB,
  createVideoInNocoDB
};


