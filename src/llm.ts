import Client from '@anthropic-ai/sdk';
import fs from 'fs';
import { config } from './config';
import { XMLParser } from 'fast-xml-parser';

interface TranscriptAnalysis {
  thinking: string;
  format: string;
  summary: string;
  speakers: string[];
  takeaways: string[];
}

async function analyzeTranscript(transcript: string): Promise<TranscriptAnalysis> {
  console.log('Analyzing transcript...');
  // Initialize Anthropic client
  const client = new Client({
    apiKey: config.ANTHROPIC_API_KEY,
  });

  try {
    const prefix = '<transcript_analysis>';


    // Read prompt template
    const promptTemplate = await fetchPromptTemplate();
    
    // Construct the full prompt
    const fullPrompt = `${promptTemplate}\n\nAnalyze this transcript:\n${transcript}`;

    // Call Claude
    const response = await client.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 4096,
      temperature: 0.7,
      system: "You are an expert at analyzing technical transcripts and extracting key insights.",
      messages: [
        {
          role: 'user',
          content: fullPrompt,
        },
        {
            role: 'assistant',
            content: prefix
        }
      ],
    });

    // Parse XML response
    const analysis = parseXMLResponse(`${prefix}${response.content[0].text}`);
    
    return analysis;
  } catch (error) {
    console.error('Error analyzing transcript:', error);
    throw error;
  }
}

async function fetchPromptTemplate(): Promise<string> {
  try {
    // Read prompt.txt from file system
    return fs.readFileSync('src/prompt.txt', 'utf8');
  } catch (error) {
    console.error('Error reading prompt template:', error);
    throw error;
  }
}

function parseXMLResponse(responseText: string): TranscriptAnalysis {
  console.log('Parsing XML response...');
  const parser = new XMLParser({
    ignoreAttributes: true,
    trimValues: true
  });
  
  // Parse the XML string
  const parsed = parser.parse(`<root>${responseText}</root>`);
  
  // Extract data from the parsed object
  const data = parsed.root.transcript_analysis;
  
  const analysis: TranscriptAnalysis = {
    thinking: data.thinking || '',
    format: data.format || '',
    summary: data.summary || '',
    speakers: Array.isArray(data.speakers) ? data.speakers : (data.speakers || '').split('\n').filter(Boolean),
    takeaways: Array.isArray(data.takeaways) ? data.takeaways : (data.takeaways || '').split('\n').filter(Boolean)
  };

  analysis.speakers = analysis.speakers.map(speaker => speaker.trim());
  analysis.takeaways = analysis.takeaways.map(takeaway => takeaway.trim());

  return analysis;
}

export { analyzeTranscript, TranscriptAnalysis };