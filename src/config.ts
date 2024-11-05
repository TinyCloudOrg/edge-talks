import dotenv from 'dotenv';

dotenv.config();

export const config = {
  SOCIAL_LAYER_AUTH_TOKEN: process.env.SOCIAL_LAYER_AUTH_TOKEN || '',
  GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS || '',
  PORT: process.env.PORT || 3000,
  NOCODB_API_KEY: process.env.NOCODB_API_KEY || '',
  NOCODB_PROJECT_NAME: process.env.NOCODB_PROJECT_NAME!,
  NOCODB_TABLE_ID: process.env.NOCODB_TABLE_ID!,
  SENTRY_DSN: process.env.SENTRY_DSN!,
  ASSEMBLYAI_API_KEY: process.env.ASSEMBLYAI_API_KEY!,
};
