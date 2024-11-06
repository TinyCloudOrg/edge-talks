import dotenv from 'dotenv';

dotenv.config();

export const config = {
  NOCODB_API_KEY: process.env.NOCODB_API_KEY || '',
  NOCODB_PROJECT_NAME: process.env.NOCODB_PROJECT_NAME!,
  NOCODB_TABLE_ID: process.env.NOCODB_TABLE_ID!,
  ASSEMBLYAI_API_KEY: process.env.ASSEMBLYAI_API_KEY!,
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY!,
};
