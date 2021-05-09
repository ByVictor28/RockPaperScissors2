import React from 'react'
import classes from "./Option.module.scss"

const Option = ({option})=>{ 

    let type;
    let src_image;

    switch (option) {
        case "S":
            type = `${classes.Scissors} ${classes.Option}`
            src_image = "images/icon-scissors.svg"
            break;
        case "R":
            type = `${classes.Rock} ${classes.Option}`
            src_image = "images/icon-rock.svg"
            break;
        case "P":
            type = `${classes.Paper} ${classes.Option}`
            src_image = "images/icon-paper.svg"
            break;
        case "L":
            type = `${classes.Lizard} ${classes.Option}`
            src_image = "images/icon-lizard.svg"
            break;
        default:
            type = `${classes.Spock} ${classes.Option}`
            src_image = "images/icon-spock.svg"
            break;
    }

return (
    <div className={type}>
        <div className={`${classes.Circle}`}>
            <img src={src_image} alt="Icon"/>
        </div>
        <div className={classes.Docoration}>
            
        </div>
    </div>
) 
}

export default Option
