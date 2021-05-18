import React from 'react'
import classes from "./Switch.module.scss"

const Switch = ({click})=>{ 
    return (
        <div>
            <input type="checkbox" id="switch" onClick={click}/><label className={classes.Switch} htmlFor="switch">Toggle</label>
        </div>
    ) 
}

export default Switch
