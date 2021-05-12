import React from 'react'
import classes from "./Header.module.scss"

const Header = ({score})=>{ 
return (
    <div className={classes.Header}>
        <img src="images/logo.svg" alt="Logo"/>
        <div className={`${classes.Score} shadow`}>
          <span>Score</span>
          <span className={classes.Number}>{score}</span>
        </div>
    </div>
) 
}

export default Header
