import React from 'react'
import Switch from '../UI/Switch/Switch'
import classes from "./Header.module.scss"

const Header = ({score,click,playerOneScore,playerTwoScore})=>{ 
return (
    <div className={classes.Header}>
        <div className={`${classes.Score} shadow`}>
          <span>Player:{playerOneScore.name!==""?playerOneScore.name:"Waiting"}</span>
          <span className={classes.Number}>{playerOneScore.score}</span>
        </div>

        <div className={classes.Mode}>
          <img src="images/logo.svg" alt="Logo"/>
          <Switch click={click}/>
        </div>

        <div className={`${classes.Score} shadow`}>
          <span>Player:{playerTwoScore.name!==""?playerTwoScore.name:"Waiting"}</span>
          <span className={classes.Number}>{playerTwoScore.score}</span>
        </div>
    </div>
) 
}

export default Header
