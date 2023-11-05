import { feedbackRouter } from "./routers/feedback";
import { waitlistRouter } from "./routers/waitlist";
import { userRouter } from "./routers/user";
import { onboardingRouter } from "./routers/onboarding";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  feedback: feedbackRouter,
  waitlist: waitlistRouter,
  user: userRouter,
  onboarding: onboardingRouter,
});

export type AppRouter = typeof appRouter;

