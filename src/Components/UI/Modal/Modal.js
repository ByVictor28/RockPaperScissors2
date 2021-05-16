import React from 'react'
import classes from "./Modal.module.scss"

const Modal = ({normalGame,showModal,click})=>{ 
    let srcImageRules = normalGame?"images/image-rules.svg":"images/image-rules-bonus.svg"
return (
    <div className={`${classes.Modal} ${showModal&&classes.Activo}`}>
        <div className={classes.Container}>
            <div className={classes.Header}>
                <h2>RULES</h2>
                <button onClick={click}>X</button>
            </div>
            <img src={srcImageRules} alt="Rules" />
        </div>
    </div>
) 
}

export default Modal
