CREATE TABLE IF NOT EXISTS "feedback" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"message" text NOT NULL,
	"timestamp" text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "waitlist" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"reason" text NOT NULL,
	"createdAt" text DEFAULT CURRENT_TIMESTAMP,
	"invitationSentAt" text,
	CONSTRAINT "waitlist_email_unique" UNIQUE("email")
);
