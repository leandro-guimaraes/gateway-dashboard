"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Login() {
  return (
    <main
      className="
        min-h-screen
        flex items-center justify-center
        p-4
        bg-gradient-to-br
        from-primarySoft
        via-white
        to-primarySoft
      "
    >
      <div
        className="
          w-full max-w-5xl
          grid grid-cols-1 md:grid-cols-2
          overflow-hidden
          rounded-3xl
          bg-white/80
          backdrop-blur-xl
          shadow-2xl
        "
      >
        {/* ================= LEFT SIDE – FORM ================= */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/kairos-way.png"
              alt="Gateway"
              width={120}
              height={40}
              priority
            />
          </div>

          <h1 className="text-3xl font-semibold text-gray-900">
            Login
          </h1>

          <p className="text-muted-foreground mt-2 mb-8">
            Gerencie transações, integrações e pagamentos em um único lugar.
          </p>

          <form className="space-y-5">
            <div className="space-y-1">
              <Label>Email corporativo</Label>
              <Input
                placeholder="usuario@gateway.com"
                className="
                  h-11 rounded-xl
                  focus-visible:ring-primary
                  focus-visible:ring-2
                "
              />
            </div>

            <div className="space-y-1">
              <Label>Senha</Label>
              <Input
                type="password"
                className="
                  h-11 rounded-xl
                  focus-visible:ring-primary
                  focus-visible:ring-2
                "
              />
            </div>

            <Button
              className="
                w-full h-11 rounded-xl
                bg-primary text-white
                hover:bg-primary/90
              "
            >
              Entrar no painel
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            <Button
              variant="outline"
              className="
                w-full h-11 rounded-xl
                hover:bg-primary/5
              "
            >
              Entrar com Google
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Ambiente seguro · Autenticação criptografada
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE – IMAGE ================= */}
        <div className="relative hidden md:block">
          <Image
            src="/kairos-way-login.png"
            alt="Gateway Dashboard"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-primary/80
              via-primary/40
              to-transparent
              flex flex-col justify-end
              p-8
            "
          >
          
          </div>
        </div>
      </div>
    </main>
  )
}
