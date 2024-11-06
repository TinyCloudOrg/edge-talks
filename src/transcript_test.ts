import { analyzeTranscript } from './llm';
import fs from 'fs';

async function writeAnalysisToMarkdown(analysis: any, filename: string) {
  const markdown = `# Transcript Analysis

## Format
${analysis.format}

## Summary
${analysis.summary}

## Key Takeaways
${analysis.takeaways.join('\n')}

## Speakers
${analysis.speakers.join('\n')}

`;

  // Create documents directory if it doesn't exist
  if (!fs.existsSync('documents')) {
    fs.mkdirSync('documents');
  }

  fs.writeFileSync(`documents/${filename}.md`, markdown);
  console.log(`Analysis written to documents/${filename}.md`);
}

// Modify main to write the analysis
async function main() {
  const transcript = JSON.parse(fs.readFileSync('transcript-6.json', 'utf-8'));
  const analysis = await analyzeTranscript(transcript.text);
  console.log(analysis);
  
  // Get filename without extension
  const baseFilename = 'transcript-6.json'.replace('.json', '');
  await writeAnalysisToMarkdown(analysis, baseFilename);
}

main();