import React from 'react'

function Modal({open}) {
    if (!open) {
        return null;
    }
  return (
    <div>Modal</div>
  )
}

export default Modal