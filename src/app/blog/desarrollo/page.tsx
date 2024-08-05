import React from 'react'
import Menu from '@/componentes/planes/menu'
import Desarrollo from '@/componentes/blog/desarrollo'
import Redes from '@/componentes/contactos/redes'

function page() {
  return (
    <div>
      <Menu />
      <Desarrollo />
      <Redes />
    </div>
  )
}

export default page
