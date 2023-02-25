/*
  4.1.2 - Nombre, función, valor [A]

  El código debe ser semánticamente correcto y sin
  errores significativos.

  ---

  4.1.1 - Análisis (código) [A]

  Toda tecnología accesible hace uso de las propiedades de
  nombre, función y valor para identificar correctamente los
  elementos HTML estándar. Cualquier componente
  personalizado también debe traer estos atributos de forma adecuada.

*/

import "./App.css";
import About from './components/about';
import Email from "./components/email"
import Navbar from './components/navbar';
import Video from './components/video';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="footerPage">
        <aside>
          <h2>Vídeo</h2>
          <Video />
        </aside>
        <div className="about">
          <h2>Sobre Rick and Morty</h2>
          <About />
        </div>
        <div className="section">
          <h2>Recibir noticias sobre la serie</h2>
          <Email />
        </div>
      </main>
    </>
  );
};

export default App;
