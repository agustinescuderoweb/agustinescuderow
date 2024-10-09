import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Inyecta el script de Google Analytics
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-81Q9W2LL4J";
    script.async = true;
    document.head.appendChild(script);

    // Configura Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-81Q9W2LL4J');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
