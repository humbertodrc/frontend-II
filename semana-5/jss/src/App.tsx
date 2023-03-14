import './App.css';

import logo from './assets/logo.svg';
import { Character } from './components/Character';
import { Modal } from './components/Modal';
import useModal from './hooks/useModal';

function App() {

  const { isShowing: isAliveShowed, toggle: toggleAlive } = useModal();
  const { isShowing: isDeadShowed, toggle: toggleDead } = useModal();

  return (
    <div className="App">
      <img src={logo} />
      <div>
        <button onClick={toggleAlive}>
          <p className="ButtonAliveRicks">Rick's vivos</p>
        </button>

        <button onClick={toggleDead}>
          <p className="ButtonDeadsRicks">Rick's vivos</p>
        </button>
      </div>

      <Modal isShowing={isAliveShowed} hide={toggleAlive} title="Rick's vivos">
        <Character status="alive" />
      </Modal>

      <Modal isShowing={isDeadShowed} hide={toggleDead} title="Rick's muertos">
        <Character status="dead" />
      </Modal>
    </div>
  )
}

export default App
