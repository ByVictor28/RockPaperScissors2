import React from 'react'
import classes from "./Switch.module.scss"

const Switch = ({click})=>{ 
return (
    <>
        <input type="checkbox" id="switch" onClick={click}/><label htmlFor="switch">Toggle</label>
    </>
) 
}

export default Switch
