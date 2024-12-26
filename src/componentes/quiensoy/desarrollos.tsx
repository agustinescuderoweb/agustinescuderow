import React from 'react'
import Image from 'next/image'
import styles from '@/componentes/quiensoy/desarrollos.module.css'
import pintura from '../../../public/pintura.jpg'
import maquillaje from '../../../public/maquillaje.jpg'
import antenas from '../../../public/antenas.jpg'
import pc from '../../../public/pc.jpg'
import magia from '../../../public/magia.jpg'
import cultura from '../../../public/cultura.jpg'
import glow from '../../../public/glow.jpg'
import huellas from '../../../public/montaña.jpg'
import ferrari from '../../../public/ferrari.jpg'


function desarrollos() {
  return (
    <div className={styles.desarrollos}>
        <h1 className={styles.misdesarrollos}>Mis Desarrollos</h1>
          <div className={styles.contenedor}>
            <a href="https://merakiart.netlify.app"><div className={styles.card}><Image className={styles.imag} src={pintura} alt="pintura"></Image><h1>Meraky Art</h1></div></a>
            <a href='https://ariadnaeventmakeupp.netlify.app'><div className={styles.card}><Image className={styles.imag} src={maquillaje} alt="maquillaje"></Image><h1>AriadnaEventMakeupp</h1></div></a>
            <a href='http://www.rytel.net/'><div className={styles.card}><Image className={styles.imag} src={antenas} alt="antenas"></Image><h1>Rytel</h1></div></a>
        </div>
        <div className={styles.contenedor}>
            <a href='https://modopc.netlify.app'><div className={styles.card}><Image className={styles.imag} src={pc} alt="pc"></Image><h1>Modo Pc</h1></div></a>
            <a href='https://agustinmagia.netlify.app'><div className={styles.card}><Image className={styles.imag} src={magia} alt="magia"></Image><h1>Agustin Magia</h1></div></a>
            <a href='https://culturac3.org/'><div className={styles.card}><Image className={styles.imag} src={cultura} alt="cultura"></Image><h1>Cultura C3</h1></div></a>
        </div>
        <div className={styles.contenedor}>
           <a href='https://glowtienda.netlify.app'><div className={styles.card}><Image className={styles.imag} src={glow} alt="glow"></Image><h1>GloW Tienda</h1></div></a>
          <a href='https://www.huellasandinasmountainshop.com.ar/'><div className={styles.card}><Image className={styles.imag} src={huellas} alt="huellas"></Image><h1>Huellas Andinas</h1></div></a>
          <a href='https://ferrari7.netlify.app/'><div className={styles.card}><Image className={styles.imag} src={ferrari} alt="ferrari"></Image><h1>Ferrari</h1></div></a>
        </div>
    </div>
  )
}

export default desarrollos
