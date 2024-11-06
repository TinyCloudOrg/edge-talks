import { Api } from "nocodb-sdk";
import { config } from './config';
import { getAllSessions, getDownloadUrlFromAsset } from './functions';
import { AssemblyAITranscriber } from './transcriber';
import { analyzeTranscript, TranscriptAnalysis } from './llm';
import fs from 'fs';

interface NocoDBEvent {
  Id?: string;
  stream_eth_id: string;
  name: string;
  description: string;
  stream_eth_url: string;
  playback_url: string;
  download_url: string;
  asset_id: string;
  transcript: string;
  num_speakers: number;
  summary?: string;
  analysis?: string;
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

async function getVideosWithoutField(field: string): Promise<NocoDBEvent[]> {
  try {
    const response = await nocoApi.dbTableRow.list(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      {
        where: `(${field},blank,)`
      }
    );
    return response.list as NocoDBEvent[];
  } catch (error) {
    console.error(`Error getting videos without ${field}:`, error);
    throw error;
  }
}

async function getVideosWithField(field: string): Promise<NocoDBEvent[]> {
  try {
    const response = await nocoApi.dbTableRow.list(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      {
        where: `(${field},notblank,)`
      }
    );
    return response.list as NocoDBEvent[];
  } catch (error) {
    console.error(`Error getting videos with ${field}:`, error);
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
    const videos = await getVideosWithoutField('transcript');
    console.log(`Transcribing ${videos.length} videos...`);

    for (const video of videos) {
      if (!video.download_url) {
        console.log(`Skipping video ${video.Id} - no download URL`);
        continue;
      }

      console.log(`Transcribing video ${video.Id} (${video.name})...`);
      const transcriptResult = await transcriber.transcribe(video.download_url);
      // // Save transcript result to file
      // if (transcriptResult && transcriptResult.text) {
      //   const filename = `transcript-${video.Id}.json`;
      //   fs.writeFileSync(filename, JSON.stringify(transcriptResult, null, 2));
      //   console.log(`Saved transcript to ${filename}`);
      // }
      if (transcriptResult && transcriptResult.text) {
        await updateVideoTranscript(
          video.Id!,
          transcriptResult.text,
          transcriptResult.num_speakers || 0
        );
        console.log(`Updated transcript for video ${video.Id}`);
      }
    }
  } catch (error) {
    console.error('Error transcribing videos:', error);
    throw error;
  }
}

async function updateVideoName(id: string, name: string): Promise<void> {
  try {
    await nocoApi.dbTableRow.update(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      id,
      {
        name
      }
    );
  } catch (error) {
    console.error('Error updating video name:', error);
    throw error;
  }
}

async function updateAllVideoNames(): Promise<void> {
  try {
    const sessions = JSON.parse(fs.readFileSync('sessions.json', 'utf-8'));
    const videos = await getVideosWithoutField('name');

    for (const video of videos) {
      const session = sessions.find((s: any) => s._id === video.stream_eth_id);
      if (session && session.name !== video.name) {
        console.log(`Updating name for video ${video.Id} from "${video.name}" to "${session.name}"`);
        await updateVideoName(video.Id!, session.name);
      }
    }
  } catch (error) {
    console.error('Error updating video names:', error);
    throw error;
  }
}

async function updateVideoSummary(id: string, summary: string): Promise<void> {
  try {
    await nocoApi.dbTableRow.update(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      id,
      {
        summary
      }
    );
  } catch (error) {
    console.error('Error updating video summary:', error);
    throw error;
  }
}

async function updateVideoAnalysis(id: string, analysis: string): Promise<void> {
  try {
    await nocoApi.dbTableRow.update(
      "noco",
      config.NOCODB_PROJECT_NAME,
      config.NOCODB_TABLE_ID,
      id,
      {
        analysis
      }
    );
  } catch (error) {
    console.error('Error updating video summary:', error);
    throw error;
  }
}

function generateSummary(video: NocoDBEvent, analysis: TranscriptAnalysis): string {
  const markdown = `# ${video.name} Summary

## Overview
Watch ${analysis.format} [here](${video.stream_eth_url})

## Summary
${analysis.summary}

## Key Takeaways
${analysis.takeaways.join('\n')}

## Speakers
${analysis.speakers.join('\n')}

`;
  return markdown;
}


async function updateAllSummaries(): Promise<void> {
  try {
    // Get videos that have transcripts but no summaries
    const videos = await getVideosWithoutField('summary');
    const videosWithTranscripts = videos.filter(video => video.transcript);
    
    console.log(`Generating summaries for ${videosWithTranscripts.length} videos...`);

    for (const video of videosWithTranscripts) {
      console.log(`Generating summary for video ${video.Id} (${video.name})...`);
      
      // Prepare context for LLM
      const context = `
Name: ${video.name}
Description: ${video.description}
Transcript: ${video.transcript}
`;
      
      // Generate summary using LLM
      const analysis = await analyzeTranscript(context);
      await updateVideoAnalysis(video.Id!, JSON.stringify(analysis));
      const summary = generateSummary(video, analysis);

      await updateVideoSummary(video.Id!, summary);
      console.log(`Updated summary for video ${video.Id}`);
    }
  } catch (error) {
    console.error('Error updating summaries:', error);
    throw error;
  }
}

async function exportSummariesToMarkdown(): Promise<void> {
  try {
    // Get all videos that have summaries
    const videos = await getVideosWithField('summary');
    console.log(`Exporting summaries for ${videos.length} videos...`);

    // Create documents directory if it doesn't exist
    if (!fs.existsSync('documents')) {
      fs.mkdirSync('documents');
    }

    // Export each video's summary to a markdown file
    for (const video of videos) {
      fs.writeFileSync(`documents/${video.name}.md`, video.summary!);
      console.log(`Exported summary for video ${video.Id} to documents/${video.name}.md`);
    }
  } catch (error) {
    console.error('Error exporting summaries:', error);
    throw error;
  }
}

// Export the main functions
export {
  storeAllVideos,
  transcribeAllVideos,
  findVideoInNocoDB,
  createVideoInNocoDB,
  updateAllVideoNames,
  updateAllSummaries,
  exportSummariesToMarkdown,
};


