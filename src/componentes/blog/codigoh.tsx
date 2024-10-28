import React from 'react';
import styles from '@/componentes/blog/codigoh.module.css';

const HtmlInfo = [
  {
    title: "¿Qué es HTML?",
    description: `HTML, o Lenguaje de Marcado de Hipertexto, es el estándar principal para crear y estructurar contenido en la web. Fue desarrollado en los años 90 y sigue siendo fundamental para el desarrollo de páginas web.`
  },
  {
    title: "Estructura",
    description: `HTML se utiliza para definir la estructura de una página web. Utiliza "etiquetas" para marcar diferentes tipos de contenido, como encabezados, párrafos, imágenes, enlaces, listas, etc.`
  },
  {
    title: "Etiquetas",
    description: `Las etiquetas HTML se escriben entre corchetes angulares. Por ejemplo, <code>&lt;p&gt;</code> para un párrafo, <code>&lt;h1&gt;</code> para un encabezado principal, y <code>&lt;a&gt;</code> para un enlace.`
  },
  {
    title: "Atributos",
    description: `Las etiquetas pueden tener atributos que proporcionan información adicional. Por ejemplo, en <code>&lt;a href="https://ejemplo.com"&gt;Este es un enlace&lt;/a&gt;</code>, <code>href</code> es un atributo que define la URL a la que el enlace llevará.`
  },
  {
    title: "Semántica",
    description: `HTML5 introdujo etiquetas semánticas, como <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, y <code>&lt;section&gt;</code>, que ayudan a estructurar el contenido de manera más clara y comprensible tanto para los navegadores como para los motores de búsqueda.`
  },
  {
    title: "Interacción con CSS y JavaScript",
    description: `HTML se combina con CSS (Cascading Style Sheets) para el diseño visual y con JavaScript para agregar interactividad a las páginas web.`
  },
  {
    title: "Accesibilidad",
    description: `HTML también juega un papel crucial en la accesibilidad web, ya que una estructura bien formada permite que las tecnologías de asistencia interpreten y presenten el contenido de manera efectiva.`
  }
];

const Html: React.FC = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>¿Qué es HTML?</h1>
      {HtmlInfo.map((section, index) => (
        <div className={styles.contenido} key={index}>
          <h2 className={styles.subtitulo}>{section.title}</h2>
          <p className={styles.parrafo}>{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Html;
