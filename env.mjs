// @ts-check
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    POSTGRES_URL: z.string().url(),
    POSTGRES_USER: z.string().url(),
    POSTGRES_PASSWORD: z.string().url(),
    POSTGRES_HOST: z.string().url(),
    POSTGRES_DATABASE: z.string().url(),

    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    // UPSTASH_REDIS_REST_URL: z.string().min(1),
    // UPSTASH_REDIS_REST_TOKEN: z.string().min(1),

    // CLERK_SECRET_KEY: z.string().min(1),
  },
  client: {
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,

    NODE_ENV: process.env.NODE_ENV,
    // CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      // process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,

    // UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    // UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  },
  // skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

