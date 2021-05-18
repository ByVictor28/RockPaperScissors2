import React from 'react'
import classes from "./Modal.module.scss"

const Modal = ({showModal,children,trasitionD})=>{ 
return (
    <div className={`${classes.Modal} ${showModal&&classes.Activo}`} style={{transition:trasitionD?"top 1s ease":""}}>
        {children}
    </div>
) 
}

export default Modal
