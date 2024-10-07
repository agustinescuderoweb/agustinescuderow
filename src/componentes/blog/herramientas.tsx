import React from 'react';
import styles from '@/componentes/blog/herramientas.module.css';

const WebToolsInfo = [
  {
    title: "Wix",
    description: `Wix es una plataforma basada en la web que permite a los usuarios crear sitios web sin necesidad de conocimientos avanzados de programación. Con su editor visual de arrastrar y soltar, los usuarios pueden diseñar páginas de manera intuitiva, eligiendo entre múltiples plantillas personalizables. Wix se dirige tanto a principiantes como a pequeñas empresas que buscan crear una presencia en línea rápidamente.`,
    advantages: `
      - Facilidad de uso: La interfaz de arrastrar y soltar permite un diseño sin código.
      - Plantillas variadas: Dispone de una gran cantidad de plantillas personalizables.
      - Hosting incluido: No requiere configuración adicional de alojamiento.
    `
  },
  {
    title: "WordPress",
    description: `WordPress es una plataforma de código abierto utilizada por millones de sitios web en todo el mundo. Ofrece flexibilidad y control total sobre el diseño y las funcionalidades, gracias a su vasto ecosistema de temas y plugins. Además, WordPress es ideal para blogs, tiendas online y sitios web complejos que requieren características avanzadas.`,
    advantages: `
      - Flexibilidad: Soporta una amplia variedad de plugins y temas que permiten personalización avanzada.
      - Comunidad activa: Hay una gran cantidad de recursos y soporte disponibles.
      - SEO amigable: Ofrece opciones integradas y plugins que mejoran la optimización para motores de búsqueda.
    `
  },
  {
    title: "Shopify",
    description: `Shopify es una plataforma especializada en la creación de tiendas online. Es una opción popular entre emprendedores que buscan vender productos y servicios en línea de manera sencilla y eficiente. Shopify incluye herramientas para gestionar productos, pagos y envíos, lo que lo convierte en una solución integral para comercio electrónico.`,
    advantages: `
      - Todo en uno para e-commerce: Incluye herramientas para pagos, envíos y gestión de inventario.
      - Fácil integración: Ofrece integración con varias aplicaciones y plataformas externas.
      - Seguridad y soporte: Shopify gestiona la seguridad y actualizaciones, lo que alivia la carga técnica.
    `
  }
];

const WebTools: React.FC = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>3 Herramientas de Desarrollo Web</h1>
      {WebToolsInfo.map((tool, index) => (
        <div className={styles.contenido} key={index}>
          <h2 className={styles.subtitulo}>{tool.title}</h2>
          <p className={styles.parrafo}>{tool.description}</p>
          <h3 className={styles.subtitulo}>Ventajas:</h3>
          <ul className={styles.lista}>
            {tool.advantages.split('\n').map((advantage, i) => (
              <li key={i} className={styles.parrafo}>{advantage.trim()}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WebTools;
