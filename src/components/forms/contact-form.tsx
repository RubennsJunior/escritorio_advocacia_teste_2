"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"

import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type SubmitState = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", phone: "", email: "", message: "", website: "" },
  })

  async function onSubmit(values: ContactFormValues) {
    setState("loading")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) throw new Error("Falha no envio")

      setState("success")
      reset()
    } catch {
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-forest/30 bg-forest/5 p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-forest" />
        <h3 className="font-heading text-xl font-medium">Mensagem enviada</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Obrigado pelo contato. Nossa equipe irá analisar sua mensagem e
          retornará em breve.
        </p>
        <Button variant="outline" className="mt-2 rounded-full" onClick={() => setState("idle")}>
          Enviar outra mensagem
        </Button>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      {/* Honeypot — mantido fora da visão de usuários reais, mas acessível a bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Não preencher este campo</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome completo</Label>
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Conte um pouco sobre o seu caso..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {state === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" />
          Não foi possível enviar sua mensagem agora. Tente novamente ou fale pelo WhatsApp.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={state === "loading"}
        className="mt-2 rounded-full text-base"
      >
        {state === "loading" && <Loader2 className="size-4 animate-spin" />}
        {state === "loading" ? "Enviando..." : "Enviar mensagem"}
      </Button>

      <p className="text-xs text-muted-foreground">
        Ao enviar, você concorda com nossa{" "}
        <a href="/politica-de-privacidade" className="underline underline-offset-2 hover:text-foreground">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  )
}
