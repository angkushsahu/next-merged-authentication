import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Custom authentication with next-auth",
   description: "Custom authentication with next-auth",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`bg-gray-900 text-white ${inter.className}`}>
            <AuthProvider>
               <Header />
               <>{children}</>
            </AuthProvider>
         </body>
      </html>
   );
}
