import React, { FC } from "react";

interface ModalProps {
	title: string;
	children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ title, children }) => {
  
  const handleShowModal = () => {
    console.log("handleShowModal");
  };

  const isShowing = false;

	return (
		<>
      {isShowing && (
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
