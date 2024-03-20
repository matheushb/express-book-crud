import 'dotenv/config';

export const DATABASE_URL =
  process.env.DATABASE_URL ?? 'mongodb://localhost:27017/dev';
export const PORT = process.env.PORT ?? 3000;
