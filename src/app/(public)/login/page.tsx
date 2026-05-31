"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.4-1.66 4.1-5.5 4.1-3.3 0-6-2.74-6-6.1S8.7 5.9 12 5.9c1.88 0 3.14.8 3.86 1.49l2.63-2.53C16.9 3.3 14.66 2.3 12 2.3 6.92 2.3 2.8 6.42 2.8 11.5S6.92 20.7 12 20.7c5.28 0 8.78-3.71 8.78-8.94 0-.6-.07-1.06-.15-1.52H12z"
      />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-grain opacity-[0.035]" />
      </div>

      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-text-secondary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar
        </Link>

        <Card className="animate-fade-up border-border bg-surface shadow-[0_24px_60px_-28px_rgba(44,44,42,0.25)]">
          <CardHeader className="items-center text-center">
            <Logo className="mb-3" />
            <CardTitle className="font-display text-2xl font-medium text-text-primary">
              Entrar no NotaCerta
            </CardTitle>
            <CardDescription className="text-text-secondary">
              Acesse sua conta para gerenciar suas notas fiscais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => signIn("google", { callbackUrl: "/app/dashboard" })}
              variant="outline"
              className="w-full gap-2.5 border-border bg-surface text-text-primary hover:bg-accent hover:text-primary"
            >
              <GoogleIcon />
              Entrar com Google
            </Button>
            <p className="mt-5 text-center text-xs text-text-muted">
              Ao continuar, você concorda com os termos de uso e a política de
              privacidade.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
