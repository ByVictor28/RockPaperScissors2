import React from 'react'
import "./Switch.module.scss"

const Switch = ({click})=>{ 
    return (
        <div>
            <input type="checkbox" id="switch" onClick={click}/><label className={classes.Switch} htmlFor="switch">Toggle</label>
        </div>
    ) 
}

export default Switch
