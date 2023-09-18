import { login } from "@/constants";
import NextAuth, { AuthOptions, Awaitable } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail, signInWithOAuth } from "./helpers";
import connectDatabase from "@/lib/db";

connectDatabase();

export const authOptions: AuthOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
   ],
   pages: {
      signIn: login,
   },
   callbacks: {
      async signIn({ account, profile }) {
         if (account && account.type === "oauth")
            return (await signInWithOAuth({ account, profile })) as Awaitable<string | boolean>;
         return true;
      },
      async jwt({ token }) {
         token.user = await getUserByEmail({ email: token.email });
         return token;
      },
      async session({ session: s, token }) {
         s.user = token.user as typeof s.user;
         return s;
      },
   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
