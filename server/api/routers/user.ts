import { insertUser, user } from "@/db";
import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { eq, DrizzleError } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  // addUser: publicProcedure
  //   .input(insertUser)
  //   .mutation(async ({ ctx, input }) => {
  //     try {

  //       const res = await ctx.db.insert(user).values({
  //         userId: input.userId,
  //         name: input.name,
  //         email: input.email,
  //         onboardingComplete: input.onboardingComplete
  //       });
  //       console.log('res', res);
  //       return user
  //     } catch (err) {
  //       console.log('err', err);
  //       if (
  //         err instanceof DrizzleError &&
  //         err.message.includes("UNIQUE constraint")
  //       ) {
  //         throw new TRPCError({
  //           code: "BAD_REQUEST",
  //           message: "You are already on the waitlist",
  //         });
  //       } else {
  //         throw new TRPCError({
  //           code: "INTERNAL_SERVER_ERROR",
  //           message: "Failed to add to waitlist",
  //         });
  //       }
  //     }
  //   }),
  getUser: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        email: z.string(),
        name: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { userId, email, name } = input;

      let res = await ctx.db
        .select()
        .from(user)
        .where(eq(user.email, email))
        .limit(1);

      let dbUser;
      if (res.length) {
        dbUser = res.at(0);
      } else {
        dbUser = await ctx.db.insert(user).values({
          userId,
          name,
          email,
          onboardingComplete: false
        }).returning();
        console.log('res after inserting user', res);
      }

      return dbUser;
    }),
  completeUserOnboarding: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { userId } = input;
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: { onboardingComplete: true },
      })


      // await ctx.db
      //   .update(user)
      //   .set({ onboardingComplete: true })
      //   .where(eq(user.userId, userId));
    }),
});

