import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalPrincipal, ModalWrapper, TitleMain } from './Modal.style';
import './style.css'

export interface ModalInterface {
	isShowing: boolean;
	hide: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal : React.FC<ModalInterface> = ({ isShowing, hide, title, children}) => {
	return isShowing
    ? ReactDOM.createPortal(
      <>
        <ModalOverlay>
          <ModalWrapper>
            <ModalPrincipal>
              <div className="modal-header">
                <TitleMain isActive>{children}</TitleMain>
                <button className="modal-close-button" onClick={hide}>
                  Cerrar
                </button>
              </div>
              <div>{children}</div>
            </ModalPrincipal>
          </ModalWrapper>
        </ModalOverlay>
      </>,
      document.body
    )
    : null;
};

export default Modal;
