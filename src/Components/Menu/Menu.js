import React, {useState} from 'react'
import classes from "./Menu.module.scss"

const Menu = ({getDataUser,leaveGroupHandler})=>{ 
    const [name, setName] = useState("1");
    const [room, setRoom] = useState("1");
    const [canChange, setCanChange] = useState(true);

    const aceptData = () =>{
        getDataUser({name,room})
        // console.log("object")
        setCanChange(false);
    }
    const tryAgain = () =>{
        leaveGroupHandler({name,room})
        // console.log("object")
        setCanChange(true);
    }
return (
    <div className={classes.Menu}>
        
        <div>    
            <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}} disabled={!canChange} value={name}/>
        </div>
        <div>    
            <input type="text" placeholder="Room" onChange={(e) => {setRoom(e.target.value)}} disabled={!canChange} value={room}/>
        </div>
        {
            canChange?
            <div>
                <input type="submit" value="Accept" onClick={aceptData}/>
            </div>
            :
            <div>
                <input type="submit" value="Try again" onClick={tryAgain}/>
            </div>
        }
    </div>
) 
}

export default Menu
