'use client'

import React from 'react'
import Image from 'next/image'
import bull from "../../../public/icon/bullseye.svg"
import rain from "../../../public/icon/rainbow.svg"
import book from "../../../public/icon/bookmark-check.svg"
import styles from "@/componentes/planes/programas.module.css"
import note from "../../../public/note.png"
import Animacion from "@/componentes/animaciones/animacion"
import { motion } from "framer-motion";


function planes() {
  return (
    <div className={styles.programas}>
      <div className={styles.estilo}>
        <motion.div className={styles.web} 
         initial={{ y: -200, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }} 
         transition={{ duration: 1, ease: "easeOut" }}> 
        <h1>Desarrolla tu presencia en linea</h1>
        <h2>Muestra tus proyectos, tus habilidades y productos.</h2>
        <a href='https://wa.link/elp2e3'><button>Empieza ahora!</button></a>
        </motion.div>
        <motion.div className={styles.imag} 
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }} >
        <Animacion />
        </motion.div>
      </div>
      <div className={styles.contenido}>
        <div className={styles.cardone}> 
          <div className={styles.content}>
            <Image className={styles.svg} src={bull} alt="bull"></Image>
            <h1 className={styles.titulo}>Diseños Web Personalizados</h1>
            <p className={styles.parrafos}>Diseños de web que destacan la identidad de tu marca</p>
            <a href='https://wa.link/elp2e3'><button className={styles.mas}>Más Info</button></a>
          </div>
        </div>
        <div className={styles.cardtwo}>
          <div className={styles.content}>
            <Image className={styles.svg} src={rain} alt="rain"></Image>
            <h1 className={styles.titulo}>Responsive <br></br> Desing</h1>
            <p className={styles.parrafos}>Sitios Web con adaptabilidad a distintos dispositivos</p>
             <a href='https://wa.link/elp2e3'><button className={styles.mas}>Más Info</button></a>
          </div>
        </div>
        <div className={styles.cardthree}>
          <div className={styles.content}>
            <Image className={styles.svg} src={book} alt="book"></Image>
            <h1 className={styles.titulo}>Marketing Digital</h1>
            <p className={styles.parrafos}>Diseños de web con atractivo e interes comercial</p>
             <a href='https://wa.link/elp2e3'><button className={styles.mas}>Más Info</button></a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default planes
