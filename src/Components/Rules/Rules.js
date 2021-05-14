import React,{useState} from 'react'
import Modal from '../UI/Modal/Modal'
import classes from "./Rules.module.scss"

const Rules = ({normalGame})=>{ 
    const [showModal, setShowModal] = useState(false)
    
    const toogleShowModal = () =>{
        setShowModal(!showModal)
    }
return (
    <div className={classes.Rules} onClick={toogleShowModal}>
        Rules
        <Modal showModal={showModal} click={toogleShowModal} normalGame={normalGame}/>
    </div>
) 
}

export default Rules
