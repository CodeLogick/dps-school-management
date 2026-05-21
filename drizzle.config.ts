import { defineConfig } from 'drizzle-kit';

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  console.log('ℹ️  DATABASE_URL not set - app will use mock data');
}

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: dbUrl || 'postgresql://user:password@localhost:5432/dps',
  },
  verbose: true,
  strict: true,
});