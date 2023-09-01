import { type FormSubmission } from "@prisma/client";
import { Resend } from "resend";
import { z } from "zod";
import { env } from "~/env.mjs";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const formSubmissionRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z
          .string({
            required_error: "Se requiere un nombre.",
          })
          .min(1)
          .max(50),
        email: z
          .string({
            required_error: "Se requiere un correo.",
          })
          .email(),
        phone: z.string().max(15).optional(),
        treatment: z.string().max(50).optional(),
        date: z.date(),
        time: z.string().max(5),
        message: z.string().min(1).max(500),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const submission: FormSubmission = await ctx.prisma.formSubmission.create(
        {
          data: {
            name: input.name,
            email: input.email,
            phone: input.phone,
            treatment: input.treatment,
            date: input.date,
            time: input.time,
            message: input.message,
          } as FormSubmission,
        }
      );

      const resend = new Resend(env.RESEND_API_KEY);

      try {
        await resend.sendEmail({
          from: "Nuevo Registro <no-reply@nogiistudio.com>",
          to: ["david@nogiistudio.com"],
          subject: "Nuevo registro",
          text: `Nombre: ${input.name}\nCorreo: ${input.email}\nTeléfono: ${
            input.phone
          }\nTratamiento: ${input.treatment}\nFecha: ${
            input.date.toISOString().split("T")[0]
          }\nHora: ${input.time}\nMensaje: ${input.message}`,
        });
      } catch (error) {
        console.log(error);
      }
      return submission;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.formSubmission.findMany();
  }),

  getById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input: id }) => {
      return await ctx.prisma.formSubmission.findUnique({
        where: {
          id: id,
        },
      });
    }),
});
