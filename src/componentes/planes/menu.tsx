'use client'
import Link from 'next/link'
import Image from 'next/image'
import agus from '../../../public/logo.png'
import styles from '@/componentes/planes/menu.module.css'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={styles.contenedor}>
      <div className={styles.header}>
        {!isOpen && (
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={agus} alt="Logo" />
          </div>
        )}
        <button className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`${styles.items} ${isOpen ? styles.show : ''}`}>
        <Link href="/">¿Quién Soy?</Link>
        <Link href="/planes">Planes</Link>
        <Link href="#">Blog</Link>
        <Link href="/contactos">Contactos</Link>
      </div>
    </div>
  );
}

export default Menu;
