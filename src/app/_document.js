// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/../public/icon/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
          {/* Script de Google Analytics */}
          <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-81Q9W2LL4J');
            `,
          }}
        />
      </body>
    </Html>
  );
}
