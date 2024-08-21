'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import web from '../../../public/ventajas.jpg';
import code from '../../../public/code.jpg';
import dom from '../../../public/dom.jpg';
import style from '../blog/blog.module.css';

const Blog = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.titulo}>Entérate de las novedades actuales del desarrollo de sitios Web</div>
      <div className={style.cards}>
          <a href='../../blog/ventajas' className={style.contenidos}>
            <Image className={style.web} src={web} alt="web" />
            <h1>Ventajas de Tener un Sitio Web</h1>
            <h2>Sitio Web | Lectura de 5 min</h2>
          </a>
        <div className={style.contenidos}>
          <a href='../../blog/desarrollo' className={style.contenido}>
          <Image className={style.code} src={code} alt="code" />
          <h1>Desarrollo Web con Código vs Wordpress</h1>
          <h2>Desarrollo Web | Lectura de 5 min</h2>
          </a>
        </div>
        <div className={style.contenidos}>
          <a href='../../blog/dominio'>
          <Image className={style.dom} src={dom} alt="dom" />
          <h1>¿Qué es un Dominio y un Hosting?</h1>
          <h2>Base de datos | Lectura de 5 min</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
