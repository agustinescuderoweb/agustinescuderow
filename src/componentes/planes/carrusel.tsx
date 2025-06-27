'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import maquillaje from '../../../public/maquillaje.webp';
import computacion from '../../../public/computadora.jpg';
import styles from '@/componentes/planes/carrousel.module.css';
import ferrari from '../../../public/ferrari.webp';
import magia from '../../../public/magias.jpg'
import meraki from '../../../public/meraki.jpg'
import turismo from '../../../public/turismo.jpg'
import Link from 'next/link';

const Carousel = () => {
  const images = [ 
   { src: maquillaje, link: 'https://ariadnaeventmakeupp.netlify.app/', text: 'Sitio Web creado para una maquilladora'},
   { src: computacion,  link: 'https://modopc.netlify.app/', text: 'Sitio Web creado para una empresa de computación'},
   { src: magia, link: 'https://agustinmagia.netlify.app', text: 'Sitio Web para Artista'},
   { src: meraki, link: 'https://merakiarteinsumo.com/', text: 'Ecommerce para tienda de Arte'},
   { src: turismo, link: 'https://turismoa.netlify.app/', text: 'Sitio Web para empresa de turismo'},
   { src: ferrari, link: 'https://ferrari7.netlify.app/', text: 'Sitio replica modelo web Ferrari'}
  
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  return (
    <div className={styles.caroul}>
      <div className={styles.check}>
        <span className={styles.span}>Proyectos Realizados</span>
      </div>
    <div className={styles.carousel}>
      <button className={styles.navButton} onClick={handlePrevClick}>‹</button>
      <div className={styles.imagText}>
      <Image className={styles.carouselimag} src={images[currentIndex].src} alt={`Slide ${currentIndex}`} />
      <span className={styles.textOverlay}>{images[currentIndex].text}</span>
      </div>
      <button className={styles.navButton} onClick={handleNextClick}>›</button>
      </div>
      <div className={styles.link}>
      <Link href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Ir a la Web</button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;