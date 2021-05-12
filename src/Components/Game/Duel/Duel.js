import React,{useEffect,useState} from 'react'
import Option from '../Option/Option'
import classes from "./Duel.module.scss"

function getIntegerForm(option){
    switch (option) {
        case "P":
            return 1;
        case "S":
            return 2;
        case "L":
            return 3;
        case "X":
            return 4;
        default:
            return 0;
    }
}


function didIWin(user,pc){
    const newUserOptionInteger=getIntegerForm(user)
    var matrix = [
                        //["rock","paper","scissors","lizard","spock"]
        /* rock */      [     0,     -1,         1,       1,     -1],
        /* paper */     [     1,      0,        -1,      -1,      1],
        /* scissors */  [    -1,      1,         0,       1,     -1],
        /* lizard */    [    -1,      1,        -1,       0,      1],
        /* spock */     [     1,     -1,         1,      -1,      0],
    ]
    
    return matrix[newUserOptionInteger][pc];
}

const Duel = ({optionSelected,changeSelection,changeScore,type})=>{
    
    const [pcOptionSelected, setPcOptionSelected] = useState("a")
    const [statusDuel, setStatusDuel] = useState("Tie");
    useEffect(() => {
        let min = 0
        let max = type?2:4
        // console.log(max)
        
        min = Math.ceil(min);
        max = Math.floor(max);
        let pcSelected = Math.floor(Math.random() * (max - min + 1)) + min;
        
        switch (pcSelected) {
            case 1:
                setPcOptionSelected("P")
                break;
            case 2:
                setPcOptionSelected("S")
                break;
            case 3:
                setPcOptionSelected("L")
                break;
            case 4:
                setPcOptionSelected("X")
                break;
            default:
                setPcOptionSelected("R")
                break;
        }
        switch (didIWin(optionSelected,pcSelected)) {
            case 1:
                // console.log("GANASTE")
                setStatusDuel("Win")
                changeScore(1)
                break;
            case -1:
                
                setStatusDuel("Lose")
                // console.log("PERDISTE")
                changeScore(-1)
                break;        
        
            default:
                // console.log("Empate")
                break;
        }

    }, [optionSelected,type])
    
return (
    <div className={classes.Duel}>
            <Option option={optionSelected} Winner={statusDuel==="Win"?true:false}/>
            <div className={classes.Message}>
                <span>You {statusDuel}</span>    
                <button onClick={()=> changeSelection("")}>Play Again</button>
            </div>
            <Option option={pcOptionSelected} Winner={statusDuel==="Lose"?true:false}/>
        
    </div>
) 
}

export default Duel
