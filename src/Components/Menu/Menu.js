import React, {useState} from 'react'
import classes from "./Menu.module.scss"

const Menu = ({getDataUser,leaveGroupHandler})=>{ 
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [canChange, setCanChange] = useState(true);

    const aceptData = () =>{
        if(room!==""&&name!==""){
            getDataUser({name,room})
            // console.log("object")
            setCanChange(false);
        }
        else{
            window.alert("name and room obligatory")
        }
    }
    const tryAgain = () =>{
        leaveGroupHandler({name,room})
        setName("")
        setRoom("")
        getDataUser({name:"",room:""})
        // console.log("object")
        setCanChange(true);
    }
    const getRoomFromServer = () =>{
        fetch('https://rockpaperscissorsjs.herokuapp.com/room')
        .then(response => response.json())
        .then(data => {
            setRoom(data.room)
            navigator.clipboard.writeText(data.room)
        })

    }
return (
    <div className={classes.Menu}>
        <div>    
            <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}} disabled={!canChange} value={name}/>
        </div>
        <div className={classes.Room}>    
            <input type="text" placeholder="Room" onChange={(e) => {setRoom(e.target.value)}} disabled={!canChange} value={room}/>
            <button onClick={canChange===true?getRoomFromServer:null}>Get</button>
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
