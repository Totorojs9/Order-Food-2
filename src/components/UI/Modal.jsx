import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ModalElement, backdropElement } from "../utils/constant";

const Backdrop = ({ onCLose }) => {
  return <StyledBackdrop onClick={onCLose}></StyledBackdrop>;
};

const ModalCont = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

function Modal({ children }) {
  return (
    <>
      {createPortal(<Backdrop />, backdropElement)}
      {createPortal(<ModalCont>{children}</ModalCont>, ModalElement)}
    </>
  );
}

export default Modal;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(3px);
`;

const StyledModalContent = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
