import React from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css'

const BTN_STYLE ={
    marginLeft: "90%", 
    marginTop: "13px" ,
    cursor:"pointer",
    width:"20px",
    height:"20px",
    color:"#979797",
    background:"none",
    border:"none",
    fontSize:"20px",
  
  }
  

function Modal({children,onClose,modalRef}) {
    return ReactDom.createPortal(
      <>
        <div className={styles.overlay} />
        <div ref={ modalRef} className={styles.modal}>
          <button style={BTN_STYLE} onClick={onClose}> X </button>
          {children}
        </div>
      </>,
      document.getElementById('class-root')
    )
  }
  
  export default Modal