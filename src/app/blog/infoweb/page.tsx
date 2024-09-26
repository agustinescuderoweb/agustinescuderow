import React from 'react'
import Menu from '@/componentes/planes/menu'
import Web from '@/componentes/blog/web'
import Redes from '@/componentes/contactos/redes'

function page() {
  return (
    <div>
        <Menu />
        <Web />
        <Redes />
    </div>
  )
}

export default page