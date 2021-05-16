import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const useSocket = () =>{
    const [moves, setMoves] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient("http://localhost:3000/");
        
        socketRef.current.on("newMove",(data)=>{
            console.log(data)
        })
        return () => {
            socketRef.current.disconnect();
        }
    }, [])

    const sendMoveToServer = () => {
        socketRef.current.emit("newMove",{
            move:"S",
            player:"1"
        })
    }
    
    return { moves, sendMoveToServer };
}

export default useSocket;