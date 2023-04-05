import React, { useState } from 'react'
import ReactDom from "react-dom";
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';
// import { createPortal } from 'react-dom';

const modalPlaceholder = document.getElementById("modal");
const Portal = () => {
  const [isOpen,setIsOpen] = useState(false);

  const handleModal = ()=>{
    setIsOpen(true);
  }

  const handleClose=()=>{
    setIsOpen(false)
  }
  return (
    <>
    <button onClick={handleModal}>Open Modal</button>
    {isOpen?(
      <>
      {
      ReactDom.createPortal(
        <Backdrop />,
        modalPlaceholder
      )
    }
    {
      ReactDom.createPortal(
        <ModalOverlay handleClose={handleClose}/>,
        modalPlaceholder
      )
    }</>
    ):null}
    </>
  )
}

export default Portal
