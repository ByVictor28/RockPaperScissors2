import React from 'react'
import Option from '../Option/Option'
import classes from "./Normal.module.scss"

const Game = ({changeSelection})=>{ 
return (
    <div className={classes.Game}>
        <img src="images/bg-triangle.svg" alt="board-triangle"/>
        <Option option="S" click={() => changeSelection("S")}/>
        <Option option="P" click={() => changeSelection("P")}/>
        <Option option="R" click={() => changeSelection("R")}/>
    </div>
) 
}

export default Game
