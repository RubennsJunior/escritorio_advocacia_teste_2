import { NextResponse } from "next/server"

import { contactFormSchema } from "@/lib/validations/contact"

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 })
  }

  const parsed = contactFormSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.flatten() },
      { status: 422 }
    )
  }

  const { website, ...data } = parsed.data

  // Honeypot preenchido => provável bot. Responde 200 "silenciosamente" para
  // não revelar a defesa ao bot, mas descarta a mensagem.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  // TODO(integração): plugar um provedor de e-mail/CRM real (ex: Resend,
  // SendGrid, RD Station) usando variáveis de ambiente. Ver .env.example e
  // CONTENT_PENDING.md. Por ora, registramos no log do servidor.
  console.info("[contato] Nova mensagem recebida", {
    name: data.name,
    email: data.email,
    phone: data.phone,
    messageLength: data.message.length,
  })

  return NextResponse.json({ ok: true })
}
