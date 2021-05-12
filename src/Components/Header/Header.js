import React from 'react'
import Switch from '../UI/Switch/Switch'
import classes from "./Header.module.scss"

const Header = ({score,click})=>{ 
return (
    <div className={classes.Header}>
        <img src="images/logo.svg" alt="Logo"/>
        <Switch click={click}/>
        <div className={`${classes.Score} shadow`}>
          <span>Score</span>
          <span className={classes.Number}>{score}</span>
        </div>
    </div>
) 
}

export default Header
