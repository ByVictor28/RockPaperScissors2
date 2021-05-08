import React from 'react'
import classes from "./Game.module.scss"

const Game = (props)=>{ 
return (
    <div className={classes.Game}>
         <img src="images/bg-triangle.svg" alt="board-triangle"/>
    </div>
) 
}

export default Game
