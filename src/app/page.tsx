export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-medium text-text-primary">NotaCerta</h1>
      <p className="max-w-md text-sm text-text-secondary">
        Você esquece de emitir nota fiscal todo mês? O NotaCerta emite
        automaticamente pra você, no dia certo.
      </p>
    </main>
  );
}
