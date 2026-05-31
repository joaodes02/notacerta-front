import Link from "next/link";
import {
  ArrowRight,
  Check,
  UserPlus,
  CalendarClock,
  Coffee,
  FileCheck2,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    icon: UserPlus,
    title: "Cadastre o cliente",
    desc: "Adicione quem recebe a nota uma única vez. CPF ou CNPJ, e-mail e endereço, pronto.",
  },
  {
    n: "02",
    icon: CalendarClock,
    title: "Configure o agendamento",
    desc: "Defina o serviço, o valor e o dia do mês. O NotaCerta assume a recorrência daí pra frente.",
  },
  {
    n: "03",
    icon: Coffee,
    title: "Esqueça",
    desc: "No dia certo, a NFS-e é emitida sozinha e enviada pro seu cliente. Você nem precisa abrir o app.",
  },
];

const plans = [
  {
    name: "Pro",
    price: "89",
    tagline: "Para quem emite todo mês sem falta.",
    featured: false,
    features: [
      "Emissão automática de NFS-e",
      "Clientes ilimitados",
      "Até 30 agendamentos ativos",
      "Histórico e download de PDFs",
    ],
  },
  {
    name: "Business",
    price: "149",
    tagline: "Para escritórios e times que crescem.",
    featured: true,
    features: [
      "Tudo do plano Pro",
      "Agendamentos ilimitados",
      "Vários usuários na mesma empresa",
      "Suporte prioritário",
    ],
  },
];

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* atmosfera de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-primary-light blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-grain opacity-[0.035]" />
      </div>

      {/* nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            className="text-text-secondary hover:bg-accent hover:text-primary"
          >
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary-hover">
            <Link href="/login">Começar grátis</Link>
          </Button>
        </nav>
      </header>

      {/* hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
        <div>
          <span
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Emissão automática de NFS-e
          </span>

          <h1
            className="animate-fade-up mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Pare de lembrar de{" "}
            <span className="italic text-primary">emitir nota.</span>
            <br />A gente lembra por você.
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-md text-base leading-relaxed text-text-secondary"
            style={{ animationDelay: "160ms" }}
          >
            Cadastre uma vez, escolha o dia, e o NotaCerta emite suas notas
            fiscais automaticamente todo mês, no dia certo, sem você precisar
            lembrar.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary-hover"
            >
              <Link href="/login">
                Começar grátis
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-surface text-text-primary hover:bg-accent hover:text-primary"
            >
              <Link href="#planos">Ver planos</Link>
            </Button>
          </div>

          <p
            className="animate-fade-up mt-4 text-xs text-text-muted"
            style={{ animationDelay: "320ms" }}
          >
            Sem cartão de crédito · Cancele quando quiser
          </p>
        </div>

        {/* mock de produto */}
        <div
          className="animate-fade-up relative mx-auto w-full max-w-sm"
          style={{ animationDelay: "200ms" }}
        >
          <div className="rotate-[1.5deg] rounded-2xl border border-border bg-surface p-5 shadow-[0_24px_60px_-20px_rgba(44,44,42,0.25)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-text-muted">
                Agendamento
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-2.5 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Ativo
              </span>
            </div>
            <p className="mt-4 font-display text-xl font-medium text-text-primary">
              Consultoria mensal
            </p>
            <p className="text-sm text-text-secondary">
              Padaria do Bairro · CNPJ
            </p>
            <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
              <div>
                <p className="text-xs text-text-muted">Valor</p>
                <p className="font-display text-2xl font-medium text-text-primary">
                  R$ 1.200
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-muted">Emite todo dia</p>
                <p className="font-display text-2xl font-medium text-primary">
                  05
                </p>
              </div>
            </div>
          </div>

          {/* toast flutuante */}
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-[0_16px_40px_-16px_rgba(44,44,42,0.3)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
              <FileCheck2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-medium text-text-primary">
                NFS-e emitida
              </p>
              <p className="text-xs text-text-muted">há instantes · 05/jun</p>
            </div>
          </div>
        </div>
      </section>

      {/* como funciona */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-secondary">Como funciona</p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-text-primary sm:text-4xl">
              Três passos. Depois, silêncio.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="group relative rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-medium text-border transition-colors group-hover:text-primary/30">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-medium text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* planos */}
      <section id="planos" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-secondary">Planos</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-text-primary sm:text-4xl">
            Um preço fixo pra nunca mais esquecer.
          </h2>
          <p className="mt-3 text-sm text-text-secondary">
            Escolha o plano e deixe a recorrência por nossa conta.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "relative rounded-2xl border-2 border-primary bg-surface p-7 shadow-[0_24px_60px_-28px_rgba(59,109,17,0.45)]"
                  : "relative rounded-2xl border border-border bg-surface p-7"
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Mais completo
                </span>
              )}
              <h3 className="font-display text-2xl font-medium text-text-primary">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">{plan.tagline}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-sm text-text-muted">R$</span>
                <span className="font-display text-5xl font-medium text-text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-text-muted">/mês</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={
                  plan.featured
                    ? "mt-7 w-full bg-primary hover:bg-primary-hover"
                    : "mt-7 w-full border border-border bg-surface text-text-primary hover:bg-accent hover:text-primary"
                }
              >
                <Link href="/login">Começar com {plan.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* cta final */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 bg-grain opacity-10" />
          <h2 className="relative font-display text-3xl font-medium tracking-tight text-primary-foreground sm:text-4xl">
            A próxima nota você não vai esquecer.
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-primary-foreground/80">
            Porque quem vai lembrar é o NotaCerta. Configure em minutos e volte a
            cuidar do seu negócio.
          </p>
          <Button
            asChild
            size="lg"
            className="relative mt-8 bg-surface text-primary hover:bg-accent"
          >
            <Link href="/login">
              Começar grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <Logo />
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} NotaCerta · Emissão automática de notas
            fiscais
          </p>
        </div>
      </footer>
    </div>
  );
}
