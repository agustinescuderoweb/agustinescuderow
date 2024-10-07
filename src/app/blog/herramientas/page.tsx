import React from 'react'
import Menu from '@/componentes/planes/menu'
import Herramientas from '@/componentes/blog/herramientas'
import Redes from '@/componentes/contactos/redes'

function page() {
  return (
    <div>
        <Menu />
        <Herramientas />
        <Redes />
    </div>
  )
}

export default page