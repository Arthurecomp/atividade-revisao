import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Cabecalho } from "./components/Cabecalho";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Crud",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}
