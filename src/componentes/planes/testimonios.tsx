'use client'
import React, { useState, useEffect } from 'react';
import styles from '@/componentes/planes/testimonios.module.css'
import camila from '../../../public/icon/camilaimg.jpg'
import monica from '../../../public/icon/monicaimg.jpg'
import Image from 'next/image';

const Testimonios = () => {
  const text = [ 
    { text: '"Realmente muy conforme, me creo mi tienda de ropa conforme a mis gustos y preferencia muy satisfecha"',
      name: 'CAMILA ESCUDERO',
      src: camila },
    { text: '"La verdad muy contenta, tengo mi emprendimiento de arte y he realizado dos páginas muy a gusto con su trabajo"',
      name: 'MONICA MIRALLES',
      src: monica },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 7000); 

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [text.length]);

  return (
    <div className={styles.testimonios}>
      <h1>Testimonios de Clientes</h1>
      <div className={styles.images}>
        <span className={styles.text}>{text[currentIndex].text}</span>
        <Image src={text[currentIndex].src} alt={text[currentIndex].text} className={styles.image} />
        <span className={styles.name}>{text[currentIndex].name}</span>
      </div>
    </div>
  );
}

export default Testimonios;
