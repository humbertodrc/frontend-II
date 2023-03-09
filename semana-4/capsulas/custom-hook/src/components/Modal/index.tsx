import React, { FC } from "react";

interface ModalProps {
	title: string;
	children: React.ReactNode;
	isSohowing: boolean;
	handleShowModal: () => void;
}

const Modal: FC<ModalProps> = ({ title, children, isSohowing, handleShowModal }) => {


	return (
		<>
      {isSohowing && (
        <div className="modal-overlay">
				<div className="modal-wrapper">
					<div className="modal">
						<div className="modal-header">
							<h4>{title}</h4>
							<button className="modal-close-button" onClick={handleShowModal}>
								Cerrar
							</button>
						</div>
						<div className="modal-body">{children}</div>
					</div>
				</div>
			</div>
      )}
		</>
	);
};

export default Modal;
