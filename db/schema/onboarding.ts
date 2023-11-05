import { pgTable, text, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const onboarding = pgTable("onboarding", {
  userId: text("userId").primaryKey(),
  step: integer('step').default(0),
  completed: boolean("completed").default(false),
  skipped: boolean("skipped").default(false)
});

export const insertOnboardingSchema = createInsertSchema(onboarding).pick({
  userId: true,
});

export const updateOnboardingSchema = createInsertSchema(onboarding).omit({
  userId: true,
});

