"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Register() {
  return (
    <main
      className="
        h-screen
        w-screen
        flex items-center justify-center
        bg-gradient-to-br
        from-primarySoft
        via-white
        to-primarySoft
      "
    >
      <div
        className="
          w-full max-w-5xl
          h-[90vh]
          grid grid-cols-1 md:grid-cols-2
          overflow-hidden
          rounded-3xl
          bg-white/80
          backdrop-blur-xl
          shadow-2xl
        "
      >
        {/* ================= LEFT SIDE – FORM ================= */}
        <div className="flex flex-col justify-center p-6 md:p-8">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/kairos-way.png"
              alt="Kairos Way"
              width={120}
              height={40}
              priority
            />
          </div>

          <h1 className="text-2xl font-semibold text-gray-900">
            Criar conta
          </h1>

          <p className="text-sm text-muted-foreground mt-1 mb-4">
            Crie sua conta para acessar o painel.
          </p>

          <form className="space-y-3">
            {/* Nome + Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Nome completo</Label>
                <Input
                  placeholder="Nome completo"
                  className="h-10 rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <Label>Telefone</Label>
                <Input
                  placeholder="Telefone"
                  className="h-10 rounded-xl"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label>E-mail</Label>
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="h-10 rounded-xl"
              />
            </div>

            {/* Senha */}
            <div className="space-y-1.5">
              <Label>Senha</Label>
              <Input
                type="password"
                placeholder="Senha"
                className="h-10 rounded-xl"
              />
            </div>

            {/* Confirmar senha */}
            <div className="space-y-1.5">
              <Label>Confirmar senha</Label>
              <Input
                type="password"
                placeholder="Confirmar senha"
                className="h-10 rounded-xl"
              />
            </div>

            {/* Termos */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <input
                type="checkbox"
                className="mt-0.5 accent-[oklch(0.62_0.20_250)]"
              />
              <span>
                Aceito os{" "}
                <Link href="/termos" className="text-primary hover:underline">
                  Termos de Uso
                </Link>{" "}
                e a{" "}
                <Link
                  href="/privacidade"
                  className="text-primary hover:underline"
                >
                  Política de Privacidade
                </Link>
              </span>
            </div>

            {/* Botão */}
            <Button
              className="
                w-full h-10 rounded-xl
                bg-primary text-white
                hover:bg-primary/90
              "
            >
              Registrar
            </Button>
          </form>

          {/* Login */}
          <p className="mt-4 text-xs text-center text-muted-foreground">
            Já tem conta?{" "}
            <Link
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              Entrar
            </Link>
          </p>
        </div>

        {/* ================= RIGHT SIDE – IMAGE ================= */}
        <div className="relative hidden md:block">
          <Image
            src="/kairos-way-cadastro.png"
            alt="Kairos Way Platform"
            fill
            className="object-cover"
            priority
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-primary/80
              via-primary/40
              to-transparent
            "
          />
        </div>
      </div>
    </main>
  )
}
