// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/../public/icon/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-81Q9W2LL4J"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-81Q9W2LL4J');
</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
