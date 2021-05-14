import React from 'react'
import Option from '../Option/Option'
import classes from "./Bonus.module.scss"

const Bonus = ({changeSelection})=>{ 
return (
    <div className={classes.Bonus}>
        <img src="images/bg-pentagon.svg" alt="Bonus-triangle" className={classes.Image}/>
        <Option option="S" click={() => changeSelection("S")}/>
        <Option option="P" click={() => changeSelection("P")}/>
        <Option option="R" click={() => changeSelection("R")}/>
        <Option option="L" click={() => changeSelection("L")}/>
        <Option option="X" click={() => changeSelection("X")}/>
    </div>
) 
}

export default Bonus
