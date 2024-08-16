import Menu from "@/componentes/planes/menu";
import Hero from "@/componentes/quiensoy/hero";
import Quiensoy from "@/componentes/quiensoy/quiensoy";
import Desarrollos from "@/componentes/quiensoy/desarrollos"
import Github from "@/componentes/quiensoy/github";
import Blog from "@/componentes/quiensoy/blog";
import Contactos from "@/componentes/quiensoy/contactos";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Quiensoy />
      <Desarrollos />
      <Github />
      <Blog />
      <Contactos />
    </main>
  );
}
