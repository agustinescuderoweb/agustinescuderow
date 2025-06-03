import React from 'react'
import Head from 'next/head'
import Menu from '../../componentes/planes/menu'
import Blog from '../../componentes/blog/blog'
import Redes from '../../componentes/contactos/redes'

function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web | Tips y Tutoriales por Agustín Escudero</title>
        <meta
          name="description"
          content="Descubre los mejores consejos, tutoriales y novedades sobre desarrollo web. Aprende a crear sitios profesionales y optimizados con Agustín Scudero."
        />
      </Head>

      <div>
        <Menu />
        <Blog />
        <Redes />
      </div>
    </>
  )
}

export default BlogPage
