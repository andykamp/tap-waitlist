import { feedbackRouter } from "./routers/feedback";
import { waitlistRouter } from "./routers/waitlist";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  feedback: feedbackRouter,
  waitlist: waitlistRouter,
});

export type AppRouter = typeof appRouter;

