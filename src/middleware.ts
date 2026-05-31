import { NextResponse } from "next/server";

// Proteção de rotas autenticadas.
//
// Versão final (spec): habilitar quando a autenticação estiver configurada
// (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / NEXTAUTH_SECRET em .env.local):
//
//   import { auth } from "@/lib/auth";
//   export default auth((req) => {
//     const isLoggedIn = !!req.auth;
//     const isAppRoute = req.nextUrl.pathname.startsWith("/app");
//     if (isAppRoute && !isLoggedIn) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   });
//
// Por enquanto (fase de design, mock-first) deixamos /app acessível para
// visualizar o layout autenticado sem precisar de credenciais reais.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};
