import React from "react";
import style from "@/componentes/blog/dominio.module.css"

function dominio() {
  return (
    <div className={style.contenedor}>
        <div>
      <h1 className={style.titulo}>
        Dominio y hosting son dos conceptos fundamentales en el mundo de los
        sitios web:
      </h1>
      </div>
      <div>
        <div>
          <h1 className={style.dominio}>Dominio:</h1>

          <p>
            Es el nombre único que identifica a un sitio web en Internet. Es lo
            que los usuarios escriben en la barra de direcciones del navegador
            para acceder a un sitio web, como www.ejemplo.com. Un dominio se
            compone de dos partes principales:
          </p>
          <p>
            <strong>Nombre:</strong> El nombre que eliges para tu sitio, como
            "ejemplo". <br></br>
            <strong>Extensión:</strong> El sufijo que sigue al nombre, como
            ".com", ".org", ".net", etc. Piensa en un dominio como la dirección
            de tu casa en Internet. Es la forma en que los visitantes encuentran
            tu sitio web.
          </p>
        </div>
        <div>
          <h1  className={style.hosting}>Hosting: </h1>

          <p>
            También conocido como alojamiento web, es el servicio que
            proporciona el espacio en un servidor para almacenar los archivos de
            tu sitio web (HTML, imágenes, videos, etc.). Cuando alguien visita
            tu dominio, el hosting es el que entrega esos archivos al navegador
            del visitante para que el sitio se muestre correctamente.
          </p>

          <p>
            Imagina que el hosting es la casa donde guardas todos tus muebles y
            pertenencias (los archivos de tu sitio). El dominio sería la
            dirección que las personas utilizan para llegar a esa casa. En
            resumen, el dominio es la dirección web que los usuarios escriben
            para acceder a tu sitio, y el hosting es el lugar donde se almacenan
            todos los archivos de tu sitio web. Ambos son necesarios para que un
            sitio web funcione correctamente.
          </p>

          <p className={style.resumen}>En resumen, el dominio es la dirección web que los usuarios escriben para acceder a tu sitio, y el hosting es el lugar donde se almacenan todos los archivos de tu sitio web. Ambos son necesarios para que un sitio web funcione correctamente.</p>

        </div>
      </div>
    </div>
  );
}

export default dominio;
