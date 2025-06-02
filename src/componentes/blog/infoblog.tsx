import React from 'react';
import styles from '@/componentes/blog/infoblog.module.css'
import Image from 'next/image';
import infoblog from '../../../public/bloginfo.jpg'

const BlogInfo = [
  {
    title: "¿Para qué sirve un blog?",
    description: `Un blog es una sección dentro de tu página web donde publicás contenido útil, educativo o inspirador relacionado con tu rubro. Sirve para:

- Atraer tráfico orgánico desde buscadores como Google.
- Demostrar tu experiencia en lo que hacés.
- Resolver dudas frecuentes de tus potenciales clientes.
- Construir confianza y relaciones con tu audiencia.
- Aumentar las conversiones, es decir, más personas interesadas en tus productos o servicios.`
  },
  {
    title: "¿Quién debería tener un blog?",
    description: `Un blog puede ser útil para casi cualquier tipo de negocio, pero es especialmente recomendable si:

- Sos emprendedor o freelancer y querés destacar en tu rubro.
- Tenés una tienda online (ecommerce) y querés mejorar tu posicionamiento.
- Sos coach, nutricionista, abogado, arquitecto u otro profesional independiente.
- Tenés un negocio local y querés aparecer en las búsquedas de tu zona.
- Querés educar a tu audiencia y generar comunidad en torno a tu marca.`
  },
  {
    title: "¿Y si no sabés por dónde empezar?",
    description: `No necesitás ser experto en escritura. Lo importante es que compartas contenido que realmente ayude a tus potenciales clientes: consejos, respuestas, ideas, casos reales.`
  },
  {
    title: "¿Querés ayuda para tener tu propio blog?",
    description: `¿Querés que te ayude a crear el blog para tu negocio? Escribime un mensaje y te ayudo.`
  }
];

const BlogUso: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        ¿Para qué sirve un blog y quién debería tener uno?
      </h1>
      <Image src={infoblog}></Image>
      {BlogInfo.map((section, index) => {
        const lines = section.description.split('\n');
        const listItems = lines.filter(line => line.trim().startsWith('-'));
        const paragraphs = lines.filter(line => !line.trim().startsWith('-'));

        return (
          <div key={index} className={styles.section}>
            <h2 className={styles.subtitle}>{section.title}</h2>
            {paragraphs.map((line, idx) => (
              <p key={idx} className={styles.paragraph}>{line.trim()}</p>
            ))}
            {listItems.length > 0 && (
              <ul className={styles.list}>
                {listItems.map((item, idx) => (
                  <li key={idx}>{item.replace('-', '').trim()}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogUso;
