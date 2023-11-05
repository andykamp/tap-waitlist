import { insertWaitlist, waitlist } from "@/db";
import { clerkClient } from "@clerk/nextjs";
import { TRPCError } from "@trpc/server";
import { eq, DrizzleError } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const waitlistRouter = createTRPCRouter({
  addToWaitlist: publicProcedure
    .input(insertWaitlist)
    .mutation(async ({ ctx, input }) => {
      console.log('addToWaitlist', input);
      try {
        await ctx.db.insert(waitlist).values({
          email: input.email,
          name: input.name,
          reason: input.reason,
        });
      } catch (err) {
        console.log('err', err);
        if (
          err instanceof DrizzleError &&
          err.message.includes("UNIQUE constraint")
        ) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "You are already on the waitlist",
          });
        } else {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to add to waitlist",
          });
        }
      }
    }),
  getWaitList: protectedProcedure.query(async ({ ctx }) => {
    const waitList = await ctx.db.select().from(waitlist);

    return waitList;
  }),
  getUserWaitList: protectedProcedure
    .input(
      z.object({
        email: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { email } = input;

      const waitListUser = await ctx.db
        .select()
        .from(waitlist)
        .where(eq(waitlist.email, email))
        .limit(1);

      return waitListUser;
    }),
  sendUserInvitation: protectedProcedure
    .input(
      z.object({
        invitationId: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { invitationId } = input;

      console.log("invitationId", invitationId);

      const invitation = await ctx.db
        .select()
        .from(waitlist)
        .where(eq(waitlist.id, invitationId))
        .limit(1);

      if (invitation.length > 0 && invitation[0]) {
        console.log('hiho', invitation[0].email);
        try {

          // send a email invitation with the invitedFromWaitlist set to true
          // this indicates that they should be allowed into the app
          await clerkClient.invitations.createInvitation({
            emailAddress: invitation[0].email,
            redirectUrl: "http://localhost:3000/sign-up",
            publicMetadata: { invitedFromWaitlist: true },
          })

          // @note: note needed if we allow everybody to sign up
          // await clerkClient.allowlistIdentifiers.createAllowlistIdentifier({
          //   identifier: invitation[0].email,
          //   notify: true,
          // });

          await ctx.db
            .update(waitlist)
            .set({ invitationSentAt: new Date().toDateString() })
            .where(eq(waitlist.id, invitationId));

          console.log('donedone',);
        } catch (err) {
          console.log('err', err);
        }
      }

      return invitation;
    }),
});

