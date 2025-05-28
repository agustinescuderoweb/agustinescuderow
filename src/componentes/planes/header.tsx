import Image from "next/image";
import style from "@/componentes/planes/header.module.css";
import pc from "../../../public/pc.png";

export default function Home() {
  return (
    <div className={style.espacio}>
    <div className={style.contenedor}>
      <div className={style.contenido}>
      <div className={style.text}>
      <h1>Desarrolla tu <u>Sitio Web</u><br></br>
      desde cero</h1>
      <h2>Muestra tus proyectos, habilidades o productos</h2>
      <button className={style.button}><a href="#seccion">Empieza Ahora!</a></button>
      </div>
      <div className={style.imagen}>
        <Image src={pc} alt="imagen"></Image>
        </div>
      </div>
    </div>
    </div>

  );
}
