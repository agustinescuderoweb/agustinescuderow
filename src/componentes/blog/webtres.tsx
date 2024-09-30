import React from 'react';
import styles from '@/componentes/blog/webtres.module.css'


const Web3Info = [
  {
    title: "¿Qué es la Web 3?",
    description: `La Web 3, también conocida como la tercera generación de la web, representa una nueva era en la evolución de Internet, donde la descentralización, la propiedad de datos y la interactividad avanzada son protagonistas. A diferencia de sus predecesoras, la Web 3 busca transformar la relación de los usuarios con la red, otorgándoles más control sobre sus datos y eliminando la dependencia de intermediarios.`
  },
  {
    title: "Origen y Contexto",
    description: `El concepto de Web 3 surgió en respuesta a las limitaciones y preocupaciones de las generaciones anteriores. Gavin Wood, cofundador de Ethereum, vio en la tecnología blockchain un camino para revolucionar la manera en que las personas interactúan con la web.`
  },
  {
    title: "Principios Clave de la Web 3",
    description: `
      - Descentralización: Los datos no están controlados por entidades centralizadas como grandes corporaciones, sino distribuidos en múltiples nodos globales.
      - Propiedad de Datos: Los usuarios tienen control total sobre sus datos y pueden monetizarlos directamente.
      - Blockchain y Criptomonedas: La tecnología blockchain permite la creación de aplicaciones descentralizadas y activos digitales como criptomonedas y NFTs.
      - Interoperabilidad: Los datos y activos digitales pueden moverse libremente entre diferentes plataformas sin restricciones.
    `
  },
  {
    title: "Ejemplos de Web 3 en Acción",
    description: `
      - Criptomonedas y Finanzas Descentralizadas (DeFi): Los usuarios pueden realizar transacciones sin intermediarios bancarios.
      - NFTs y Propiedad Digital: Los usuarios pueden poseer y comercializar bienes digitales únicos, como arte o coleccionables.
      - DAOs (Organizaciones Autónomas Descentralizadas): Las DAOs permiten que comunidades tomen decisiones de manera descentralizada mediante contratos inteligentes.
    `
  },
  {
    title: "Futuro de la Web 3",
    description: `
      - Privacidad y Soberanía de Datos: Los usuarios podrán proteger mejor su información gracias a la criptografía.
      - Metaverso y Realidad Extendida: La Web 3 se integrará con tecnologías inmersivas como la realidad virtual y aumentada.
      - Economía Descentralizada: Criptomonedas, NFTs y dApps permitirán gestionar finanzas sin intermediarios tradicionales.
      - Escalabilidad y Sostenibilidad: Nuevos proyectos buscan hacer las transacciones más rápidas, económicas y ecológicas.
    `
  }
];

const Web3: React.FC = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>¿Qué es la Web 3?</h1>
      {Web3Info.map((section, index) => (
        <div className={styles.contenido} key={index}>
          <h2 className={styles.subtitulo}>{section.title}</h2>
          <p className={styles.parrafo}>{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Web3;
