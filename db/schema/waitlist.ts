import { sql } from "drizzle-orm";
import { pgTable, serial, text} from 'drizzle-orm/pg-core';
import { createInsertSchema } from "drizzle-zod";

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  reason: text("reason", { enum: ["student", "project", "both"] }).notNull(),
  createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
  invitationSentAt: text("invitationSentAt"),
});

export const insertWaitlist = createInsertSchema(waitlist).omit({
  id: true,
  createdAt: true,
});

