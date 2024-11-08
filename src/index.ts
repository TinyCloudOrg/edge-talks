import {
  storeAllVideos,
  transcribeAllVideos,
  updateAllVideoNames,
  updateAllSummaries,
  exportSummariesToMarkdown,
  regenerateSummariesFromAnalysis,
} from './streamEth';

const command = process.argv[2];

async function main() {
  try {
    switch (command) {
      case 'store':
        await storeAllVideos();
        console.log('Successfully stored all videos');
        break;
      case 'transcribe':
        await transcribeAllVideos();
        console.log('Successfully transcribed all videos');
        break;
      case 'names':
        await updateAllVideoNames();
        console.log('Successfully updated all video names');
        break;
      case 'summaries':
        await updateAllSummaries();
        console.log('Successfully updated all video summaries');
        break;
      case 'export':
        await exportSummariesToMarkdown();
        console.log('Successfully exported all video summaries to markdown');
        break;
      case 'regenerate':
        await regenerateSummariesFromAnalysis();
        await exportSummariesToMarkdown();
        console.log('Successfully regenerated and exported all video summaries from analysis');
        break;
      default:
        console.error('Please specify either "store" or "transcribe" as an argument');
        process.exit(1);
    }
  } catch (error) {
    console.error(`Error processing ${command}:`, error);
    process.exit(1);
  }
}

main();
