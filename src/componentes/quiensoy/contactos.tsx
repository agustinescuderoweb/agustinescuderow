import React from 'react'
import Image from 'next/image'
import whatsaap from '../../../public/icon/whatsaaps.svg'
import instagram from '../../../public/icon/instagrams.svg'
import mail from '../../../public/icon/mails.svg'
import styles from '@/Componentes/quiensoy/contactos.module.css'



function contactos() {
  return (
    <div className={styles.contactos}>
    <h1>Enviáme un Mensaje</h1>
    <h2>Seguí mis redes Sociales</h2>
    <div className={styles.icon}>
    <a href='https://wa.link/elp2e3'><Image className={styles.icons} src={whatsaap}></Image></a>
    <a href='https://www.instagram.com/agustinescuderoweb/'><Image className={styles.icons} src={instagram}></Image></a>
    </div>
    </div>
  )
}

export default contactos