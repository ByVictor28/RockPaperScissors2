import React from 'react'
import classes from "./Modal.module.scss"

const Modal = ({type,showModal,click})=>{ 
    let srcImageRules ="";

    switch (type) {
        case "B":
            srcImageRules = "images/image-rules-bonus.svg"        
            break;
        default:
            srcImageRules = "images/image-rules.svg"
            break;
    }
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
