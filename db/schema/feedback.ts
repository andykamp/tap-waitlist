import { sql } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
});

export const insertFeedback = createInsertSchema(feedback).pick({
  email: true,
  message: true,
});

