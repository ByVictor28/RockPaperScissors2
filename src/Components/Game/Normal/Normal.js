import React from 'react'
import Option from '../Option/Option'
import classes from "./Normal.module.scss"

const Game = (props)=>{ 
return (
    <div className={classes.Game}>
        <img src="images/bg-triangle.svg" alt="board-triangle"/>
        <Option option="S"/>
        <Option option="P"/>
        <Option option="R"/>
    </div>
) 
}

export default Game
