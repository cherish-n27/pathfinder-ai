import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM } from "./_core/llm";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { createApplication, listApplications, listOpportunities, upsertProfile } from "./db";

const profileInput = z.object({ education: z.string().optional(), province: z.string().optional(), goal: z.string().optional(), interests: z.string().optional(), skills: z.string().optional(), location: z.string().optional(), constraints: z.string().optional() });
const applicationInput = z.object({ title: z.string().min(2), organisation: z.string().min(2), type: z.enum(["Study", "Work", "Skills", "Business", "Other"]), dateApplied: z.date().optional(), deadlineDate: z.date().optional(), status: z.enum(["Not started", "Applied", "Interview", "Waiting", "Accepted", "Not this time", "Withdrawn"]).optional(), notes: z.string().optional(), linkedPathwayId: z.number().optional(), linkedOpportunityId: z.number().optional() });

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => { const cookieOptions = getSessionCookieOptions(ctx.req); ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 }); return { success: true } as const; }),
  }),
  opportunities: router({
    list: publicProcedure.input(z.object({ search: z.string().optional(), category: z.enum(["Study", "Work", "Skills", "Business"]).optional() }).optional()).query(({ input }) => listOpportunities(input?.search, input?.category)),
  }),
  profile: router({
    save: protectedProcedure.input(profileInput).mutation(({ ctx, input }) => upsertProfile(ctx.user.id, input)),
  }),
  applications: router({
    list: protectedProcedure.query(({ ctx }) => listApplications(ctx.user.id)),
    create: protectedProcedure.input(applicationInput).mutation(({ ctx, input }) => createApplication(ctx.user.id, input)),
  }),
  guide: router({
    respond: protectedProcedure.input(z.object({ profile: z.string(), history: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string() })), message: z.string() })).mutation(async ({ input }) => {
      const response = await invokeLLM({ messages: [
        { role: "system", content: "You are PathFinder, a warm South African youth career guide. Ask only one question at a time. Use Grade 10 reading level, stay practical and encouraging, never diagnose, never guarantee outcomes, and never invent an institution or opportunity. Recommend only grounded directions and explain why. Always finish with one small next action when enough context exists." },
        { role: "user", content: `Profile context: ${input.profile}\nConversation so far: ${JSON.stringify(input.history)}\nNew message: ${input.message}` },
      ] });
      const content = response.choices?.[0]?.message?.content; return { message: typeof content === "string" ? content : "I’m listening. Tell me a little more about what you want to explore." };
    }),
  }),
});
export type AppRouter = typeof appRouter;
