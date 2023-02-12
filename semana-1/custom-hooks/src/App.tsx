import { useState } from 'react';
import { Modal, Sidebar } from './components';
import "./App.css";

export default function App() {

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openSidebar = () => {
    setIsOpenSidebar(true);
  }

  const closeSidebar = () => {
    setIsOpenSidebar(false);
  }

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }


  return (
    <div className="App">
      <div className="container">
        <Sidebar visible={isOpenSidebar} close={closeSidebar} />
        <h1>useDisclosure custom hook</h1>
        <div className="button-container">
          <button onClick={openSidebar}>Open sidebar</button>
          <button onClick={openModal}>Open modal</button>
        </div>
        <Modal visible={isOpenModal} close={closeModal} />
      </div>
    </div>
  );
}
