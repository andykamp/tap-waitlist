import { pgTable, unique, serial, text } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const waitlist = pgTable("waitlist", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	reason: text("reason").notNull(),
	createdAt: text("createdAt").default(CURRENT_TIMESTAMP),
	invitationSentAt: text("invitationSentAt"),
},
(table) => {
	return {
		waitlistEmailUnique: unique("waitlist_email_unique").on(table.email),
	}
});

export const feedback = pgTable("feedback", {
	id: serial("id").primaryKey().notNull(),
	email: text("email").notNull(),
	message: text("message").notNull(),
	timestamp: text("timestamp").default(CURRENT_TIMESTAMP),
});