'use client'
import React, { useState, useEffect,  useRef } from 'react';
import styles from '@/componentes/planes/testimonios.module.css'
import camila from '../../../public/icon/camilaimg.jpg'
import monica from '../../../public/icon/monicaimg.jpg'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Testimonios = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Solo dispara una vez cuando el elemento entra en vista
    threshold: 0.3, // El umbral de visibilidad es el 30%
  });

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
    <motion.div 
    className={styles.testimonios} 
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"} 
    variants={{
      hidden: { y: -400, opacity: 0 }, 
      visible: { y: 0, opacity: 1 }, 
    }}
    transition={{ duration: 0.8, ease: "easeOut" }}>
      <h1>Testimonios de Clientes</h1>
      <div className={styles.images}>
        <span className={styles.text}>{text[currentIndex].text}</span>
        <Image src={text[currentIndex].src} alt={text[currentIndex].text} className={styles.image} />
        <span className={styles.name}>{text[currentIndex].name}</span>
      </div>
    </motion.div>
  );
}

export default Testimonios;
