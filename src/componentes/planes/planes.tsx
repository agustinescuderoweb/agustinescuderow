'use client'
import React from 'react'
import { useEffect, useRef } from "react";
import fle from '../../../public/flechazo.png'
import Image from 'next/image'
import styles from '@/componentes/planes/planes.module.css'
import x from '../../../public/icon/x-circle-fill.svg'
import check from '../../../public/icon/check-circle-fill.svg'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



function planes() {

  const { ref, inView } = useInView({
    triggerOnce: true, // Solo dispara una vez cuando el elemento entra en vista
  });


  return (
   
  
    <div className={styles.contenedor}>
    <div className={styles.container}>
      <h1>Elige el Servicio que <span className={styles.marcado}>más se adapté a tu modelo de negocio</span></h1>
    </div>
    <div className={styles.servicios}>

      <div className={styles.web} >
        
            <h1>Página Web</h1>
             
      <div className={styles.item}>
        <Image className={styles.check} src={check}  alt="check" />
        <span>Formulario de Contacto</span>
       </div>
    
      <div className={styles.item}>
        <Image className={styles.check} src={check}  alt="check" />
        <span>Responsive Design</span>
      </div>
  
  
      <div className={styles.item}>
        <Image className={styles.check} src={check}  alt="check" />
        <span>Dominio Personalizado</span>
      </div>

   
      <div className={styles.item}>
        <Image className={styles.check} src={check} alt="check" />
        <span>Contactos Redes Sociales</span>
      </div>
  
  
      <div className={styles.item}>
        <Image className={styles.check} src={check}  alt="check" />
        <span>Apartados y secciones</span>
      </div>
   
   
       <div className={styles.item}>
        <Image className={styles.check} src={x} alt="x" />
        <span>Whatsapp Personalizado</span>
       </div>
        
   
        <div className={styles.item}>
         <Image className={styles.check} src={x} alt="x" />
         <span>Múltiples páginas</span>
        </div>

        
        <div className={styles.item}>
         <Image className={styles.check} src={x}  alt="x" />
         <span>Carrito de Compra</span>
        </div>

        <div className={styles.item}>
         <Image className={styles.check} src={x}  alt="x" />
         <span>Medio de Pago</span>
        </div>

          <div className={styles.boton}>
          <a href='https://wa.link/elp2e3'><button>+ Más Info</button></a>
          </div>
        </div>



        <div className={styles.sitio} >
            <h1>Sitio Web</h1>
           
               
        <div className={styles.item}>
          <Image className={styles.check} src={check} alt="check" />
          <span>Formulario de Contacto</span>
         </div>
    
         <div className={styles.item}>
           <Image className={styles.check} src={check} alt="check" />
           <span>Responsive Design</span>
         </div>
  
  
        <div className={styles.item}>
          <Image className={styles.check} src={check} alt="check" />
          <span>Dominio Personalizado</span>
        </div>

   
        <div className={styles.item}>
          <Image className={styles.check} src={check} alt="check" />
          <span>Contactos Redes Sociales</span>
        </div>
  
  
        <div className={styles.item}>
          <Image className={styles.check} src={check} alt="check" />
          <span>Apartados y secciones</span>
        </div>
   
   
        <div className={styles.item}>
         <Image className={styles.check} src={check} alt="check" />
         <span>Whatsapp Personalizado</span>
        </div>
        
   
        <div className={styles.item}>
         <Image className={styles.check} src={check} alt="check" />
         <span>Múltiples páginas</span>
        </div>

        
        <div className={styles.item}>
         <Image className={styles.check} src={x}  alt="x" />
         <span>Carrito de Compra</span>
        </div>

        <div className={styles.item}>
         <Image className={styles.check} src={x}  alt="x" />
         <span>Medio de Pago</span>
        </div>

        <div className={styles.boton}>
        <a href='https://wa.link/elp2e3'><button>+ Más Info</button></a>
        </div>
        </div>
        
        <div className={styles.ecommerce} >
        
            <h1>E-Commerce/Comercio Electrónico</h1>
           
               
        <div className={styles.item}>
          <Image className={styles.check} src={check} alt="check" />
          <span>Formulario de Contacto</span>
         </div>
    
         <div className={styles.item}>
           <Image className={styles.check} src={check} alt="check" />
           <span>Responsive Design</span>
         </div>
  
  
        <div className={styles.item}>
          <Image className={styles.check} src={check} alt="check" />
          <span>Dominio Personalizado</span>
        </div>

   
        <div className={styles.item}>
          <Image className={styles.check} src={check} alt="check" />
          <span>Contactos Redes Sociales</span>
        </div>
  
  
        <div className={styles.item}>
          <Image className={styles.check} src={check} alt="check" />
          <span>Apartados y secciones</span>
        </div>
   
   
        <div className={styles.item}>
         <Image className={styles.check} src={check} alt="check" />
         <span>Whatsapp Personalizado</span>
        </div>
        
   
        <div className={styles.item}>
         <Image className={styles.check} src={check} alt="check" />
         <span>Múltiples páginas</span>
        </div>

        
        <div className={styles.item}>
         <Image className={styles.check} src={check} alt="check" />
         <span>Carrito de Compra</span>
        </div>

        <div className={styles.item}>
         <Image className={styles.check} src={check} alt="check"/>
         <span>Medio de Pago</span>
        </div>

        <div className={styles.boton}>
        <a href='https://wa.link/elp2e3'><button>+ Más Info</button></a>
        </div>
        </div>
        </div>
        </div>
        
  )
}

export default planes
