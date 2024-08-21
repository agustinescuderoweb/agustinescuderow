import React from 'react'
import Dominio from '@/componentes/blog/dominio'
import Menu from "@/componentes/planes/menu";
import Redes from "@/componentes/contactos/redes"

function page() {
  return (
    <div>
        <Menu />
        <Dominio />
        <Redes />
    </div>
  )
}

export default page