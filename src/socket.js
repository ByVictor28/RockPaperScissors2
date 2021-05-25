import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const SEND_MOVE_EVENT = "newMove";
const JOIN_ROOM_EVENT = "joinRoom";
const CLEAN_ROOM_EVENT = "cleanRoom";
const ACCESS_DENIED_EVENT = "access_denied";
const LEAVE_GROUP_EVENT = "leaveGroup";

const useSocket = () =>{
    const [accessDenied, setAccessDenied] = useState(false)
    const [moves, setMoves] = useState({
        room:"",
        moves:0,
        player1won:false,
        players:[
            {player:1,name:"none",option:"",score:0},
            {player:1,name:"none",option:"",score:0}
        ]
    });
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient("http://localhost:3000/");
        
        socketRef.current.on(JOIN_ROOM_EVENT,(data)=>{
            // console.log(data)
            setMoves(data)
        })

        socketRef.current.on(SEND_MOVE_EVENT,(data)=>{
            // const newMove = {name:data.name,room:data.room,option:data.option,moves:data.moves}
            // console.log(SEND_MOVE_EVENT, "[[EVENT]]")
            // console.log(data.afterMove)
            setMoves(data.afterMove)
            // console.log(data)

        })

        socketRef.current.on(CLEAN_ROOM_EVENT,(data)=>{
            // const newMove = {name:data.name,room:data.room,option:data.option,moves:data.moves}
            // setMoves(data.roomDetails)
            // console.log("CLEANING ROOM: ",data)
            setMoves(data.newRoomClean)
        })

        socketRef.current.on(ACCESS_DENIED_EVENT,()=>{
            setAccessDenied(true)
        })

        socketRef.current.on(LEAVE_GROUP_EVENT,(data)=>{
            // console.log(data)
            setMoves(data)
        })


        return () => {
            socketRef.current.disconnect();
        }
    }, [])

    //JOIN A ROOM
    const joinRoom = (infoPlayer) => {
        // console.log(infoPlayer)
        socketRef.current.emit(JOIN_ROOM_EVENT,{
            name:infoPlayer.name,
            room:infoPlayer.room,
        })
    }
    const sendMoveToServer = (infoPlayer) => {
        // console.log(infoPlayer)
        socketRef.current.emit(SEND_MOVE_EVENT,{
            name:infoPlayer.name,
            room:infoPlayer.room,
            option:infoPlayer.option
        })
    }

    const leaveGroup = (name,room) =>{
        // console.log(name,room)
        socketRef.current.emit(LEAVE_GROUP_EVENT,{
            name:name,
            room:room
        })
    }
    const cleanRoom = (room) =>{
        socketRef.current.emit(CLEAN_ROOM_EVENT,{room})
    }
    
    return { moves, sendMoveToServer, joinRoom, cleanRoom, leaveGroup, accessDenied};
}

export default useSocket;