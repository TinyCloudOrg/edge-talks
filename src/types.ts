export interface VideoMetadata {
  source: {
    streamUrl: string;
    start: number;
    end: number;
  };
  playback: {
    videoUrl: string;
    ipfsHash: string;
    format: string;
    duration: number;
  };
  transcripts: {
    subtitleUrl: string;
    text: string;
    chunks: any[]; // Consider defining a more specific type for chunks if needed
  };
  _id: string;
  name: string;
  description: string;
  start: number;
  end: number;
  startClipTime: number;
  endClipTime: number;
  stageId: string;
  speakers: any[]; // Consider defining a Speaker interface if needed
  videoUrl: string;
  playbackId: string;
  assetId: string;
  eventId: string;
  track: any[]; // Consider defining a Track interface if needed
  coverImage: string;
  slug: string;
  organizationId: string;
  eventSlug: string;
  videoTranscription: string;
  aiDescription: string;
  autoLabels: string[];
  ipfsURI: string;
  mintable: boolean;
  published: boolean;
  type: string;
  nftCollections: any[]; // Consider defining an NFTCollection interface if needed
  firebaseId: string;
  talkType: string;
  processingStatus: string;
  socials: any[]; // Consider defining a Social interface if needed
  createdAt: string;
  updatedAt: string;
  __v: number;
}