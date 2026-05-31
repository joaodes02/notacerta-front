// Dados mockados para a fase de design (mock-first).
// Substituir pelos hooks do React Query (use-customers, etc.) quando a API
// do Railway estiver conectada.

export type MockUser = {
  name: string;
  email: string;
  image?: string;
  plan: "free" | "pro" | "business";
};

export const mockUser: MockUser = {
  name: "João Victor",
  email: "joaovictordes02@gmail.com",
  plan: "pro",
};
