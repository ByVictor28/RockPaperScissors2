import React from 'react'
import Option from '../Option/Option'
import classes from "./Bonus.module.scss"

const Bonus = (props)=>{ 
return (
    <div className={classes.Bonus}>
        <img src="images/bg-pentagon.svg" alt="Bonus-triangle"/>
        <Option option="S"/>
        <Option option="P"/>
        <Option option="R"/>
        <Option option="L"/>
        <Option option="X"/>
    </div>
) 
}

export default Bonus
