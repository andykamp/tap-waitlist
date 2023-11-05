import { feedbackRouter } from "./routers/feedback";
import { waitlistRouter } from "./routers/waitlist";
import { userRouter } from "./routers/user";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  feedback: feedbackRouter,
  waitlist: waitlistRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;

