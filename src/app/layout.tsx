import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agustín Escudero Web | Marketing y Desarrollo Web",
  description: "Página Web Agustín Escudero Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
