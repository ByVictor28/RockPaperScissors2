import React from 'react'
import Option from '../Option/Option'
import classes from "./Duel.module.scss"

const Duel = ()=>{ 
return (
    <div className={classes.Duel}>
        <Option option="S" />
        <Option option="L" />
    </div>
) 
}

export default Duel
