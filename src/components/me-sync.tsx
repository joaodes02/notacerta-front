"use client";

import { useMe } from "@/hooks/use-me";

// Dispara GET /api/auth/me ao entrar na área autenticada. É essa chamada que faz
// a API criar/atualizar o usuário no banco a partir dos claims do JWT. Não
// renderiza nada; só garante o sync da sessão com o backend.
export function MeSync() {
  useMe();
  return null;
}
