import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { api } from "@/lib/api";

type Plan = "free" | "pro" | "business";

// Resposta do GET /api/auth/me — a API cria/atualiza o usuário no banco a partir
// dos claims do JWT (email/name/picture) no primeiro acesso.
export type Me = {
  id: string;
  email: string;
  name?: string;
  picture?: string;
  plan: Plan;
  planStatus?: string;
  createdAt: string;
  updatedAt: string;
};

// Valida a sessão contra a API e retorna o usuário. Só dispara quando há sessão
// autenticada (accessToken presente).
export function useMe() {
  const { status } = useSession();

  return useQuery<Me>({
    queryKey: ["me"],
    queryFn: () => api.get("/auth/me"),
    enabled: status === "authenticated",
    retry: false,
  });
}
