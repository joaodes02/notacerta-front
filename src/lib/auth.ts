import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import jwt from "jsonwebtoken";

// Secret compartilhado com a API NotaCerta. PRECISA ser idêntico em ambos os
// lados (mesma string em NEXTAUTH_SECRET no front e na API), pois é com ele que
// assinamos o JWT HS256 que a API valida.
// O fallback só roda em desenvolvimento, para o app subir sem configuração na
// fase mock-first. NUNCA usar esse valor em produção (e ele não bate com a API).
const AUTH_SECRET =
  process.env.NEXTAUTH_SECRET ??
  process.env.AUTH_SECRET ??
  (process.env.NODE_ENV !== "production"
    ? "dev-only-insecure-secret-change-me"
    : undefined);

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: AUTH_SECRET,
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id as string;

      // A API espera um JWT HS256 assinado com a MESMA secret, contendo o email
      // (e name/picture). O token de sessão do NextAuth é criptografado (JWE) e
      // a API não consegue validar, então geramos aqui um token próprio e o
      // expomos em session.accessToken para mandar no header Authorization.
      if (AUTH_SECRET) {
        session.accessToken = jwt.sign(
          {
            email: token.email,
            name: token.name,
            picture: token.picture,
            sub: token.sub,
          },
          AUTH_SECRET,
          { algorithm: "HS256", expiresIn: "1h" },
        );
      }

      return session;
    },
  },
});
