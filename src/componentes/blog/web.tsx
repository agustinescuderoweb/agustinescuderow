import React from 'react';
import styles from '@/componentes/blog/web.module.css'

const Webinfo = [
    {
      title: "¿Qué es la Web?",
      description: `La Web, o World Wide Web (WWW), es un sistema de información interconectado por redes que permite a los usuarios acceder a contenido a través de internet. Este contenido incluye texto, imágenes, videos y otros medios alojados en páginas web que se pueden navegar utilizando un navegador web (como Chrome, Firefox, Safari, etc.). La Web es una de las aplicaciones más importantes que funcionan sobre Internet, pero no es lo mismo que Internet en sí, que es la infraestructura que permite la interconexión de redes globales.`
    },
    {
      title: "Origen",
      description: `La Web fue creada en 1989 por Tim Berners-Lee, un científico británico que trabajaba en el CERN (Organización Europea para la Investigación Nuclear). Él propuso un sistema para gestionar y compartir información de forma más eficiente. En 1990, desarrolló el primer navegador web y la primera página web. Su visión era crear un sistema que conectara documentos mediante hipervínculos, permitiendo a los usuarios navegar entre páginas de manera sencilla.`
    },
    {
      title: "Evolución de la Web",
      description: `
        - Web 1.0: Fue la primera etapa, también conocida como la Web estática. Las páginas web eran mayormente de solo lectura, sin interacción del usuario. Los sitios web eran simples y proporcionaban información estática.
        - Web 2.0: En los años 2000, la Web se volvió más interactiva. Aparecieron redes sociales, blogs y plataformas de contenido generado por los usuarios (como YouTube y Wikipedia). Los usuarios ya no eran solo consumidores de información, sino también creadores.
        - Web 3.0: La Web semántica, la fase actual (en evolución), busca hacer la Web más inteligente al utilizar datos estructurados y tecnologías como inteligencia artificial (IA) para proporcionar experiencias más personalizadas y automáticas. Además, se enfoca en la descentralización, con tecnologías como blockchain.`
    },
    {
      title: "Futuro",
      description: `
        - Web 3.0 y Web Semántica: La Web se está volviendo más inteligente. La Web semántica tiene como objetivo estructurar mejor los datos para que los algoritmos puedan interpretarlos y proporcionar información más relevante y precisa. Los motores de búsqueda y aplicaciones como asistentes virtuales se benefician de esto.
        - Descentralización: Las tecnologías de blockchain y las redes descentralizadas están promoviendo una Web más abierta, segura y resistente a la censura. Conceptos como los NFTs y las dApps están ganando popularidad.
        - Realidad Aumentada (AR) y Realidad Virtual (VR): Con la evolución de dispositivos y tecnologías inmersivas, la Web se está expandiendo hacia experiencias más interactivas y multisensoriales. El "Metaverso" es un concepto emergente que puede transformar cómo interactuamos en la Web, creando entornos 3D interactivos y sociales.
        - Inteligencia Artificial y Automatización: La IA se está integrando en diversas áreas de la Web para ofrecer búsquedas más inteligentes, recomendaciones personalizadas y automatización en servicios online.
        - Mayor Enfoque en Privacidad y Seguridad: Debido a crecientes preocupaciones sobre la privacidad de los datos, el futuro de la Web probablemente estará marcado por leyes y tecnologías que buscan proteger mejor la información personal de los usuarios.`
    }
  ];


  const Web: React.FC = () => {
    return (
      <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Historia y Futuro de la Web</h1>
        {Webinfo.map((section, index) => (
          <div className={styles.contenido} key={index}>
            <h2 className={styles.subtitulo}>{section.title}</h2>
            <p className={styles.parrafo}>{section.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
export default Web;
  


