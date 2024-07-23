'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import maquillaje from '../../../public/maquillaje.jpg';
import montañas from '../../../public/montaña.jpg';
import antenas from '../../../public/antenas.jpg';
import checkin from '../../../public/check.png';
import styles from '@/componentes/planes/carousel.module.css'
import Link from 'next/link';

const Carousel = () => {
  const images = [ 
   { src: maquillaje, link: 'https://ariadnaeventmakeupp.netlify.app/', text: 'Sitio Web creado para una maquilladora'},
   { src: montañas,  link: 'https://www.huellasandinasmountainshop.com.ar/', text: 'Sitio Web creado para un tienda de ropa'},
   { src: antenas, link: 'http://www.rytel.net/', text: 'Sitio Web creado para una empresa de Telecomunicaciones'}
  
  
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
        <span className={styles.span}>Algunos desarrollos</span>
        <Image className={styles.checkin} src={checkin} alt="check"></Image>
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
          <button className={styles.botton}>Ir a la Web</button>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
