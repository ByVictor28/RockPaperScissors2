import React,{useEffect} from 'react'
import Option from '../Option/Option'
import classes from "./DuelOnline.module.scss"

const DuelOnline = ({playerOneOption,palyerTwoOption,winner,cleanRoom})=>{
    
    
    useEffect(() => {
        // console.log("Player1: ",playerOneOption)
        // console.log("Player2: ",palyerTwoOption)
    }, [])
    
return (
    <div className={classes.Duel}>
        {playerOneOption&&<Option option={playerOneOption.option} Winner={winner===1&&true}/>}
            <div className={classes.Message}>
                <span>{winner}</span>    
                <button onClick={cleanRoom}>Play Again</button>
            </div>
        {palyerTwoOption&&<Option option={palyerTwoOption.option} Winner={winner===-1&&true}/>}
    </div>
) 
}

export default DuelOnline
