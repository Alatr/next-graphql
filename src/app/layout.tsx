import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import Header from "@/components/Header";
import { AuthWrapper } from "@/lib/auth-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <AuthWrapper>
          <ApolloWrapper>
            <Header />
            <main className="px-10 flex min-h-screen flex-col items-center justify-between">
              {children}
            </main>
          </ApolloWrapper>
        </AuthWrapper>
      </body>
    </html>
  );
}
