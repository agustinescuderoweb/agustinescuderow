import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import './globals.css';




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agustín Escudero Web | Desarrollo Web",
  description: "Página Web Agustín Escudero Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/logo.ico" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-81Q9W2LL4J"></Script>
        <Script id="google-analytics"> {`
       
       
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'G-81Q9W2LL4J');
        
        `}
           
        </Script>
      </head>
      <body className={inter.className}><div className="page-container">{children}</div></body>
    </html>
  );
}
