// Mock database - no actual database needed for development
export const db = {
  query: {
    users: {
      findFirst: async () => null,
    },
    students: {
      findFirst: async () => null,
    },
  },
};

export type Database = typeof db;

// If you want to use real database later:
// Uncomment this and set DATABASE_URL in .env.local
/*
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set');
}

const sql = neon(databaseUrl);
export const db = drizzle(sql, { schema });
export type Database = typeof db;
*/