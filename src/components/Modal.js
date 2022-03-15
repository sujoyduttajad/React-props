import React from 'react'

const Modal = ({ toggle }) => {
  return (
    <button 
        className='App-hidden'
        style={{
            filter: 'invert(1)',
            display: `${toggle ? 'flex' : 'none'}`
        }}
    >
        Modal
    </button>
  )
}

export default Modal