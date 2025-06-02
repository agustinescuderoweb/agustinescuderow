'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import web from '../../../public/ventajas.jpg';
import code from '../../../public/code.jpg';
import dom from '../../../public/dom.jpg';
import sitio from '../../../public/sitio.jpeg'
import webtres from '../../../public/webtres.jpeg'
import herramientas from '../../../public/herramientas.jpg'
import html from '../../../public/html.webp'
import style from '../blog/blog.module.css';
import bloginfo from '../../../public/bloginfo.jpg';

const Blog = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.titulo}>Entérate de las novedades actuales del desarrollo de sitios Web</div>
      <div className={style.rowone}>
          <a href='../../blog/ventajas' className={style.contenidos}>
            <Image className={style.caja} src={web} alt="web" />
            <h1>Ventajas de Tener un Sitio Web</h1>
            <h2>Sitio Web | Lectura de 5 min</h2>
          </a>
        <div className={style.contenidos}>
          <a href='../../blog/desarrollo' className={style.contenido}>
          <Image className={style.caja} src={code} alt="code" />
          <h1>Desarrollo Web con Código vs Wordpress</h1>
          <h2>Desarrollo Web | Lectura de 5 min</h2>
          </a>
        </div>
        <div className={style.contenidos}>
          <a href='../../blog/dominio'>
          <Image className={style.caja} src={dom} alt="dom" />
          <h1>¿Qué es un Dominio y un Hosting?</h1>
          <h2>Base de datos | Lectura de 5 min</h2>
          </a>
        </div>
      </div>
      <div className={style.rowone}>
      <div className={style.contenidos}>
          <a href='../../blog/infoweb'>
          <Image className={style.caja} src={sitio} alt="dom" />
          <h1>Historia y Futuro de la Web</h1>
          <h2>Historia | Lectura de 2 min</h2>
          </a>
        </div>
      <div className={style.contenidos}>
          <a href='../../blog/webtres'>
          <Image className={style.caja} src={webtres} alt="dom" />
          <h1>¿Qué és la Web 3.0?</h1>
          <h2>Información | Lectura de 3 min</h2>
          </a>
      </div>
      <div className={style.contenidos}>
          <a href='../../blog/herramientas'>
          <Image className={style.caja} src={herramientas} alt="dom" />
          <h1>3 Herramientas para desarrollar tu web</h1>
          <h2>Herramientas | Lectura de 3 min</h2>
          </a>
      </div>
      </div>
      <div className={style.rowone}>
      <div className={style.contenidos}>
          <a href='../../blog/codigoh'>
          <Image className={style.caja} src={html} alt="dom" />
          <h1>Conceptos Básicos de HTML</h1>
          <h2>Conceptos | Lectura de 3 min</h2>
          </a>
      </div>
      <div className={style.contenidos}>
          <a href='../../blog/bloginfo'>
          <Image className={style.caja} src={bloginfo} alt="blog" />
          <h1>¿Para qué sirve un blog?</h1>
          <h2>Información | Lectura de 3 min</h2>
          </a>
      </div>
      </div>
    </div>
  );
}

export default Blog;
