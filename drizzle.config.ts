import "dotenv/config";
import { postgresConnectionString } from '@vercel/postgres';
import type { Config } from "drizzle-kit";
import { env } from "./env.mjs";

console.log('pos',postgresConnectionString() );
console.log('env',process.env.POSTGRES_URL );
export default {
  schema: "./db/schema/index.ts",
  driver: "pg",
  out: "migrations",
  dbCredentials: {
    // password: env.POSTGRES_PASSWORD,
    // host: env.POSTGRES_HOST,
    // user: env.POSTGRES_USER,
    // database: env.POSTGRES_DATABASE,
    connectionString: process.env.POSTGRES_URL+"?sslmode=require" as string //postgresConnectionString() as string,
    // url: env.DATABASE_URL,
    // authToken: env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;

