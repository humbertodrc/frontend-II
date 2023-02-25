/*
1.4.8 - Representación visual [AAA]

Estabecer controles específicos para la presentación
de información en pantalla sin comprometer su legibilidad.

*/

import "./style.css";

const About = () => {
  return (
    <div>
      <div className="blockText">
        <p>Rick and Morty es una serie de animación.</p>
        <p>
          La serie se estrenó el 2 de diciembre de 2013 y muestra las peligrosas
          aventuras del científico alcohólico Rick y su nieto Morty, quien
          divide su tiempo entre la vida familiar y los viajes
          interdimensionales.
        </p>

        <a
          href="https://es.wikipedia.org/wiki/Rick_and_Morty"
          className="buttonAbout"
        >
          <img src="download.png" alt="" />
          <p>Leer más</p>
        </a>
      </div>

      <div>
        <img src="cite.png" alt="" className="imageCite" />
      </div>
    </div>
  );
};

export default About;
