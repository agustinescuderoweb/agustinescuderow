import React from 'react'
import Image from 'next/image'
import whatsaap from '../../../public/icon/whatsaap.svg'
import instagram from '../../../public/icon/instagram.svg'
import mail from '../../../public/icon/mail.svg'
import styles from '@/componentes/planes/contactos.module.css'



function contactos() {
  return (
    <div className={styles.contactos}>
    <h1>Enviáme un Mensaje</h1>
    <h2>Seguí mis redes Sociales</h2>
    <div className={styles.icon}>
    <a href='https://wa.link/elp2e3'><Image className={styles.icons} src={whatsaap} alt="WhatsApp"></Image></a>
    <a href='https://www.instagram.com/agustinescuderoweb/'><Image className={styles.icons} src={instagram} alt="Instagram"></Image></a>
    </div>
    </div>
  )
}

export default contactos
