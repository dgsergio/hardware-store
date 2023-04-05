import React from 'react';
import styled, {keyframes} from 'styled-components';
import { createPortal } from 'react-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const BgDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgb(0 0 0 / 60%);
  animation: ${fadeIn} 500ms ease-out;
`;

const fromTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  
  to {
    transform: translateY(0);
  }
`;

const ModalOyDiv = styled.div`
  position: fixed;
  overflow-y: auto;
  z-index: 30;
  top: 2vh;
  left: 5%;
  width: 90%;
  height: 90vh;
  background-color: white;
  padding: 2.7rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  
  animation: ${fromTop} 300ms ease-out, ${fadeIn} 500ms ease-out;
`;


const BgModal = () => {
  return <BgDiv></BgDiv>;
};

const ModalOverlay = ({ children }) => {
  return <ModalOyDiv>{children}</ModalOyDiv>;
};

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<BgModal />, document.getElementById('modal-bg'))}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('modal-overlay')
      )}
    </>
  );
};

export default Modal;
