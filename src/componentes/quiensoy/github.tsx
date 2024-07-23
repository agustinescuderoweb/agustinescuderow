import React from 'react'
import desarrollos from '../../../public/desarrolloweb.jpg'
import git from '../../../public/gitimage.jpg'
import styles from '@/componentes/quiensoy/github.module.css'
import Image from 'next/image'

function github() {
  return (
    <div className={styles.contenedor}>
        <div className={styles.contenido}><h1>Mis Proyectos Recientes...</h1><h2>Estos son algunos proyectos que he creado recientemente..</h2><h3>Si sos desarrollador podes visitar mis códigos..</h3></div>
        <div className={styles.imagenes}><Image className={styles.desarrollos} src={desarrollos} alt="desarrollos"></Image><Image className={styles.git} src={git} alt="git"></Image></div>
        <a href="https://github.com/agustinescuderoweb"><div className={styles.masproyectos}><div><h1>Ver más Proyectos</h1></div></div></a>
    </div>
  )
}

export default github
