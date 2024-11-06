import { AssemblyAI } from 'assemblyai';

/**
 * AudioTranscriber Interface 
 */
interface AudioTranscriber {
  transcribe(uri: string): Promise<{text: string | null | undefined, num_speakers: number}>;
}

/**
 * The AssemblyAITranscriber class uses the AssemblyAI API to transcribe audio.
 * It requires internet connection and a valid audio file link.
 */
class AssemblyAITranscriber implements AudioTranscriber {

  assemblyClient: AssemblyAI;

  constructor(apiKey: string) {
    this.assemblyClient = new AssemblyAI({apiKey});
  }

  /**
  * @param {string} filepath - The URI of the audio file to transcribe.
  * @returns {Promise<{text: string, num_speakers: number}>} - Resolves to the transcription of the audio file and the number of unique speakers.
  */
  async transcribe(filepath: string): Promise<{text: string | null | undefined, num_speakers: number}> {
    const data = {
      audio_url: filepath,
      speaker_labels: true,
      auto_highlights: true
    };

    const transcript = await this.assemblyClient.transcripts.create(data);

    if (transcript.utterances) {
      const response = transcript.utterances.map(utterance => `Speaker ${utterance.speaker}: ${utterance.text}`).join('\n');
      const uniqueSpeakers = new Set(transcript.utterances.map(utterance => utterance.speaker));
      return { text: response, num_speakers: uniqueSpeakers.size };
    }
    return { text: transcript.text, num_speakers: 1 };
  }
}

export { AssemblyAITranscriber };