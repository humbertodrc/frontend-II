import Character from './components/Character';
import useToggle from './components/hooks/useToggle';
import Modal from './components/Modal';
import "./styles.css";

const App = () => {

  const {handleToggle: handleToggleAlive, toggle: toggleAlive } = useToggle()
  const {handleToggle: handleToggleDead, toggle: toggleDead } = useToggle()

  return (
    <div className="App">
      <img src="logo.svg" alt="logo rick and morty" />
      <div>
        <button onClick={handleToggleAlive}>Rick's vivos</button>

        <button onClick={handleToggleDead}>Rick's muertos</button>
      </div>

      <Modal title="Rick's vivos" isSohowing={toggleAlive} handleShowModal={handleToggleAlive}>
        <Character status="alive" />
      </Modal>

      <Modal title="Rick's muertos" isSohowing={toggleDead} handleShowModal={handleToggleDead}>
        <Character status="dead" />
      </Modal>
    </div>
  );
};

export default App;