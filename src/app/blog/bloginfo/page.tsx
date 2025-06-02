import React from 'react'
import Menu from '@/componentes/planes/menu'
import Bloguso from '@/componentes/blog/infoblog'
import Redes from '@/componentes/contactos/redes'

function page() {
  return (
    <div>
      <Menu />
      <Bloguso />
      <Redes />
    </div>
  )
}

export default page
