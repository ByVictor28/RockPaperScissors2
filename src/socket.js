import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const SEND_MOVE_EVENT = "newMove";
const JOIN_ROOM_EVENT = "joinRoom";
const CLEAN_ROOM_EVENT = "cleanRoom";
const useSocket = () =>{
    const [moves, setMoves] = useState({moves:0});
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient("http://localhost:3000/");
        
        socketRef.current.on(JOIN_ROOM_EVENT,(data)=>{
            console.log(`${data.name} se unio a room ${data.room}`)
        })

        socketRef.current.on(SEND_MOVE_EVENT,(data)=>{
            // const newMove = {name:data.name,room:data.room,option:data.option,moves:data.moves}
            setMoves(data.roomDetails)
            // console.log(data)

        })

        socketRef.current.on(CLEAN_ROOM_EVENT,(data)=>{
            // const newMove = {name:data.name,room:data.room,option:data.option,moves:data.moves}
            // setMoves(data.roomDetails)
            console.log(data)
            setMoves(data.newRoomClean)

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
    const cleanRoom = (room) =>{
        socketRef.current.emit(CLEAN_ROOM_EVENT,{room})
    }
    
    return { moves, sendMoveToServer, joinRoom, cleanRoom};
}

export default useSocket;