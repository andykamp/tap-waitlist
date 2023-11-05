import { onboarding, type Onboarding, insertOnboardingSchema, updateOnboardingSchema } from "@/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { eq } from "drizzle-orm";

export const onboardingRouter = createTRPCRouter({
  get: createTRPCRouter({
    all: protectedProcedure.query(async ({ ctx }) => {
      try {
        const modules = await ctx.db
          .query
          .onboarding
          .findMany({
            where: (table, { eq }) => eq(table.userId, ctx.auth.userId),
          });

        return modules;
      } catch (err) {
        console.error(err);
      }
    }),
    byUserId: protectedProcedure
      .query(async ({ ctx }) => {
        try {
          const res = await ctx.db
            .select()
            .from(onboarding)
            .where(eq(onboarding.userId, ctx.auth.userId))
            .limit(1);

          let row
          if (res.length) {
            row = res.at(0);
          } else {
            // @todo: extract and reuse create procedure
            row = await ctx.db
              .insert(onboarding)
              .values({
                userId: ctx.auth.userId,
              })
              .returning();

            console.log('CREATED ONBOARDING', row);
          }
          return row as Onboarding;
        } catch (err) {
          console.error(err);
        }
      }),
  }),
  post: createTRPCRouter({
    create: protectedProcedure
      .input(insertOnboardingSchema)
      .mutation(async ({ ctx }) => {
        try {
          const res = await ctx.db
            .insert(onboarding)
            .values({
              userId: ctx.auth.userId,
            })
            .returning();

          return res;
        } catch (err) {
          console.error(err);
        }
      }),
    update: protectedProcedure
      .input(updateOnboardingSchema)
      .mutation(async ({ ctx, input }) => {
        try {
          const res = await ctx.db
            .update(onboarding)
            .set({
              ...input
            })
            .returning();
          console.log('updated onboarding', res);

          return res;
        } catch (err) {
          console.error(err);
        }
      }),
  }),
});
