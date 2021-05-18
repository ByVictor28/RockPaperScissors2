import React,{useState} from 'react'
import Modal from '../UI/Modal/Modal'
import classes from "./Rules.module.scss"

const Rules = ({normalGame})=>{ 
    const [showModal, setShowModal] = useState(false)
    
    let srcImageRules = normalGame?"images/image-rules.svg":"images/image-rules-bonus.svg"
    const toogleShowModal = () =>{
        setShowModal(!showModal)
    }
return (
    <div className={classes.Rules} onClick={toogleShowModal}>
        Rules
        <Modal showModal={showModal} trasitionD>
            <div className={classes.Container}>
                <div className={classes.Header}>
                    <h2>RULES</h2>
                    <button onClick={toogleShowModal}>X</button>
                </div>
                <img src={srcImageRules} alt="Rules" />
            </div>
        </Modal>
    </div>
) 
}

export default Rules
