export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-medium text-text-primary">Dashboard</h1>
      <p className="mt-1 text-sm text-text-secondary">
        Olá! O shell autenticado está pronto. As métricas e tabelas chegam na
        próxima fase (Fase 2, Core).
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Notas este mês",
          "Agendamentos ativos",
          "Próxima emissão",
          "Valor emitido",
        ].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <p className="text-xs text-text-muted">{label}</p>
            <p className="mt-3 font-display text-2xl font-medium text-border">
              ···
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
