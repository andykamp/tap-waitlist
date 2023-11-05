import { sql } from "drizzle-orm";
import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("userId").notNull().unique(),
  email: text("email").notNull().unique(),
  createdAt: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
  onboardingComplete: boolean('onboardingComplete').default(false)
});

export const insertUser = createInsertSchema(user).pick({
  userId: true,
  name: true,
  email: true,
  onboardingComplete: true,
});


