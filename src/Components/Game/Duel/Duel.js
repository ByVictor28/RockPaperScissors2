import React from 'react'
import Option from '../Option/Option'
import classes from "./Duel.module.scss"

const Duel = (props)=>{ 
return (
    <div className={classes.Duel}>
            <Option Winner/>
            <div className={classes.Message}>
                <span>YOU WIN</span>    
                <button>Play Again</button>
            </div>
            <Option/>
        
    </div>
) 
}

export default Duel
