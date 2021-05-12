import React,{useState} from 'react'
import Modal from '../UI/Modal/Modal'
import classes from "./Rules.module.scss"

const Rules = ()=>{ 
    const [showModal, setShowModal] = useState(false)
    
    const toogleShowModal = () =>{
        setShowModal(!showModal)
    }
return (
    <div className={classes.Rules} onClick={toogleShowModal}>
        Rules
        <Modal showModal={showModal} click={toogleShowModal} type="B"/>
    </div>
) 
}

export default Rules
