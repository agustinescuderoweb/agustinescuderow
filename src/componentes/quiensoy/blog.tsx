import React from 'react'
import styles from '@/Componentes/quiensoy/blog.module.css'

function blog() {
  return (
    <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Blog</h1>
        <div className={styles.blog}>
        <h1>Ventajas de Tener un Sitio Web</h1>
        <h1>Desarrollo Web con Código vs Wordpress</h1>
        <h1>¿Qué es un Dominio y un Hosting</h1>
        </div>
        <div className={styles.boton}>
        <button>Ver Más Articulos</button>
        </div>    
    </div>
  )
}

export default blog