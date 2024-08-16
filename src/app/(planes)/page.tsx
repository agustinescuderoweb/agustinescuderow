import Menu from "@/componentes/planes/menu";
import Programas from "@/componentes/planes/programas";
import Planes from "@/componentes/planes/planes";
import Carousel from "@/componentes/planes/carousel";
import Testimonios from "@/componentes/planes/testimonios";
import Contactos from "@/componentes/quiensoy/contactos";


import React from 'react'

function page() {
  return (
    <div>
        <Menu />
        <Programas />
        <Planes />
        <Carousel />
        <Testimonios />
        <Contactos />
    </div>
  )
}

export default page