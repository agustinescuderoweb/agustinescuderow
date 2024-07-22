import React from 'react'
import fle from '../../../public/flechazo.png'
import Image from 'next/image'
import styles from '@/Componentes/planes/planes.module.css'
import x from '../../../public/icon/x-circle-fill.svg'
import check from '../../../public/icon/check-circle-fill.svg'

function planes() {
  return (
    <div>
    <div className={styles.container}>
      <Image className={styles.imag} src={fle}></Image>
      <h1>Elige el Servicio que más se adapté a tu modelo de negocio</h1>
    </div>
    <div className={styles.servicios}>
     <div className={styles.landing}>
         <h1>Landing Page</h1>
          
        
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Formulario de Contacto</span>
       </div>
    
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Responsive Design</span>
      </div>
  
  
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Dominio Personalizado</span>
      </div>

   
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Contactos Redes Sociales</span>
      </div>
  
  
      <div className={styles.item}>
        <Image className={styles.check} src={x} />
        <span>Apartados y secciones</span>
      </div>
   
   
       <div className={styles.item}>
        <Image className={styles.check} src={x} />
        <span>Whatsapp Personalizado</span>
       </div>
        
   
        <div className={styles.item}>
         <Image className={styles.check} src={x} />
         <span>Múltiples páginas</span>
        </div>
        <div className={styles.boton}>
        <button>+ Más Info</button>
        </div>
        </div>

      <div className={styles.web}>
            <h1>Página Web</h1>
             
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Formulario de Contacto</span>
       </div>
    
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Responsive Design</span>
      </div>
  
  
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Dominio Personalizado</span>
      </div>

   
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Contactos Redes Sociales</span>
      </div>
  
  
      <div className={styles.item}>
        <Image className={styles.check} src={check} />
        <span>Apartados y secciones</span>
      </div>
   
   
       <div className={styles.item}>
        <Image className={styles.check} src={x} />
        <span>Whatsapp Personalizado</span>
       </div>
        
   
        <div className={styles.item}>
         <Image className={styles.check} src={x} />
         <span>Múltiples páginas</span>
        </div>
          <div className={styles.boton}>
          <button>+ Más Info</button>
          </div>
        </div>

        <div className={styles.sitio}>
            <h1>Sitio Web</h1>
           
               
        <div className={styles.item}>
          <Image className={styles.check} src={check} />
          <span>Formulario de Contacto</span>
         </div>
    
         <div className={styles.item}>
           <Image className={styles.check} src={check} />
           <span>Responsive Design</span>
         </div>
  
  
        <div className={styles.item}>
          <Image className={styles.check} src={check} />
          <span>Dominio Personalizado</span>
        </div>

   
        <div className={styles.item}>
          <Image className={styles.check} src={check} />
          <span>Contactos Redes Sociales</span>
        </div>
  
  
        <div className={styles.item}>
          <Image className={styles.check} src={check} />
          <span>Apartados y secciones</span>
        </div>
   
   
        <div className={styles.item}>
         <Image className={styles.check} src={check} />
         <span>Whatsapp Personalizado</span>
        </div>
        
   
        <div className={styles.item}>
         <Image className={styles.check} src={check} />
         <span>Múltiples páginas</span>
        </div>
        <div className={styles.boton}>
        <button>+ Más Info</button>
        </div>
        </div>
        </div>
      </div>
  )
}

export default planes
