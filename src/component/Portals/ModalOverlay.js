import React from 'react'
import './Portal.css'

const ModalOverlay = ({handleClose}) => {
  return (
    <div className='modal'>
      <div>This is modal Window</div>
      <button className='btn' onClick={handleClose}>X</button>
    </div>
  )
}

export default ModalOverlay
