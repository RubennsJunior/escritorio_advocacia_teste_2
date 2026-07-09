import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(100, "Nome muito longo."),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD.")
    .max(20, "Telefone inválido.")
    .regex(/^[0-9()\-.\s+]+$/, "Use apenas números, espaços e símbolos de telefone."),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail.")
    .email("Informe um e-mail válido."),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o seu caso (mínimo 10 caracteres).")
    .max(2000, "Mensagem muito longa."),
  // Honeypot: campo invisível para usuários reais. Se preenchido, é bot.
  website: z.string().max(0, "Falha na validação.").optional().or(z.literal("")),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
