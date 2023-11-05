CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"userId" text NOT NULL,
	"email" text NOT NULL,
	"timestamp" text DEFAULT CURRENT_TIMESTAMP,
	"onboardingComplete" boolean DEFAULT false,
	CONSTRAINT "user_userId_unique" UNIQUE("userId"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
