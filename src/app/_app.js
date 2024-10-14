import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 120, // Ajusta la distancia de desplazamiento para iniciar las animaciones (en px)
      duration: 1000, // Establece la duración de las animaciones (en ms)
      easing: 'ease-in-out', // Tipo de animación (puedes usar 'ease', 'linear', etc.)
      delay: 200, // Retraso global antes de que comience la animación (en ms)
      once: true, // Si true, las animaciones se ejecutarán solo una vez
      mirror: false, // Si true, las animaciones se ejecutarán en scroll hacia arriba
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
