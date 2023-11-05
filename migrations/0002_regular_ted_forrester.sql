CREATE TABLE IF NOT EXISTS "onboarding" (
	"userId" text PRIMARY KEY NOT NULL,
	"step" integer DEFAULT 0,
	"completed" boolean DEFAULT false,
	"completedAt" text,
	"skipped" boolean DEFAULT false
);
