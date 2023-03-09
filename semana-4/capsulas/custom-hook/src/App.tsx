import Character from './components/Character';
import Modal from './components/Modal';
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <img src="logo.svg" alt="logo rick and morty" />
      <div>
        <button>Rick's vivos</button>

        <button>Rick's muertos</button>
      </div>

      <Modal title="Rick's vivos">
        <Character status="alive" />
      </Modal>

      <Modal title="Rick's muertos">
        <Character status="dead" />
      </Modal>
    </div>
  );
};

export default App;