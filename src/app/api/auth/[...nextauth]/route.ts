import db from "@/db/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const options = {
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id;
        delete session.user.email; // sanitize data for security
      }
      return session;
    },
  },
  secret: process.env.SECRET,
  session: {
    strategy: "database",
  },
  theme: {
    colorScheme: "auto",
  },
  debug: false,
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
