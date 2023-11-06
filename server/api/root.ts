import { feedbackRouter } from "./routers/feedback";
import { waitlistRouter } from "./routers/waitlist";
import { onboardingRouter } from "./routers/onboarding";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  feedback: feedbackRouter,
  waitlist: waitlistRouter,
  onboarding: onboardingRouter,
});

export type AppRouter = typeof appRouter;

