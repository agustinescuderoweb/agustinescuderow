import React from 'react';
import Menu from '../../componentes/planes/menu';
import Blog from '../../componentes/blog/blog';
import Redes from '../../componentes/contactos/redes';

export const metadata = {
  title: 'Blog de Agustín Escudero | Desarrollo Web y Más',
  description: 'Descubre artículos, tutoriales y consejos sobre desarrollo web, SEO, diseño y más en el blog de Agustín Escudero.',
};

function BlogPage() {
  return (
    <>
      <Menu />
      <Blog />
      <Redes />
    </>
  );
}

export default BlogPage;
