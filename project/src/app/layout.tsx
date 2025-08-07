// project/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const lobster = Lobster({ subsets: ["latin"], weight: "400", variable: "--font-lobster" });

export const metadata: Metadata = {
  title: "Couple's Match - A Fun Game for Couples",
  description: "Play a fun and romantic match-3 game with your partner. A perfect game for couples to play together.",
  keywords: "couple game, match-3 game, love game, romantic game, game for couples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lobster.variable} bg-pink-100`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
