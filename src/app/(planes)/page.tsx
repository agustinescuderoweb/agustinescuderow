import Menu from "@/componentes/planes/menu";
import Header from "@/componentes/planes/header";
import Programas from "@/componentes/planes/programas";
import Carousel from "@/componentes/planes/carrusel";
import Testimonios from "@/componentes/planes/testimonios";
import Contactos from "@/componentes/quiensoy/contactos";
import Beneficios from "@/componentes/planes/beneficios";


import React from 'react'

function page() {
  return (
    <div>
        <Menu />
        <Header />
        <Programas />
        <Carousel />
        <Beneficios />
        <Testimonios />
        <Contactos />
    </div>
  )
}

export default page