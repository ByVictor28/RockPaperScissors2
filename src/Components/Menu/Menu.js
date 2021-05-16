import React, {useState} from 'react'
import classes from "./Menu.module.scss"

const Menu = ({getDataUser})=>{ 
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

return (
    <div className={classes.Menu}>
        <div>    
            <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div>    
            <input type="text" placeholder="Room" onChange={(e) => {setRoom(e.target.value)}}/>
        </div>
        <div>
            <input type="submit" value="Accept" onClick={() => getDataUser({name,room})}/>
        </div>
    </div>
) 
}

export default Menu
