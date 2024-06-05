import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import { ModalWrapperStyled } from "./styles"

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(17, 60, 87, 0.4)',
    zIndex: 10000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: 0,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: "none"
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

interface IProps {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalWrapper = ({children, open, setOpen} : IProps) => {

  function openModal() {
    setOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Auth">
        <ModalWrapperStyled> {children} </ModalWrapperStyled>
      </Modal>
    </div>
  );
}


export default ModalWrapper