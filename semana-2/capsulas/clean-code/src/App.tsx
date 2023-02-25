import './App.css'

function App() {

  return (
    <div className="teste">
        <h1>
          ¿Desesa recibir notificaciones sobre la serie Rick y Morty en su
          email?
        </h1>
        <p>
          Status Actual: <b>{}</b>
        </p>
        <br />
        <button onClick={() => console.log("cambiar el status y mensaje de nuevo estatus")}>{}</button>
        <br />
        <br />
        <br />
        <button onClick={() => console.log("Guarda el nuevo status")} className="sa">
          Guardar
        </button>
      </div>
  )
}

export default App
