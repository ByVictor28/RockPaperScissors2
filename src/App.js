import {useState,useEffect} from "react"
import './App.scss';
import Bonus from './Components/Game/Bonus/Bonus';
// import Duel from './Components/Game/Duel/Duel';
import DuelOnline from './Components/Game/DuelOnline/DuelOnline';
import Board from './Components/Game/Normal/Normal';
import Header from './Components/Header/Header';
import Menu from "./Components/Menu/Menu";
import Rules from './Components/Rules/Rules';
import Modal from "./Components/UI/Modal/Modal";
import Spinner from "./Components/UI/Spinner/Spinner";
import useSocket from "./socket";

function App() {


  const {moves, sendMoveToServer, joinRoom, cleanRoom, leaveGroup, accessDenied} = useSocket();
  const [infoPlayer, setInfoPlayer] = useState({name:"",room:""})
  
  useEffect(() => {
    
    // console.log("[[USE EFFECT]]")
    if(accessDenied){
      window.alert("The room is full")
    }
  }, [accessDenied])

  const [normalGame, setNormalGame] = useState(true)
  // const [score, setScore] = useState(0)

  const getDataUser = (infoPlayer) => {
    setInfoPlayer(infoPlayer)
    if(infoPlayer.name!=="" && infoPlayer.room!==""){  
      joinRoom(infoPlayer)
    }else{
      window.alert("NAME and ROOM obligatory")
    }
  }

  const changeSelectedOption = (option) =>{
    sendMoveToServer({...infoPlayer,option:option})
  }
  
  // const changeScore = (point) =>{
  //   setScore(score+point);
  // }
  const changeNormalGame = () =>{
    setNormalGame(!normalGame)
  }
  const cleanRoomHandler = () =>{
    cleanRoom(moves.room)
  }
  const leaveGroupHandler = ({name,room}) =>{
    // console.log("leaveGroup FUNCTION",name,room)
    leaveGroup(name,room)
  }
 
  const waitingForNextPlayer = ()=>{
    if(
      ((infoPlayer.name === moves.players[0].name && moves.players[1].name === "") || 
      (infoPlayer.name === moves.players[1].name && moves.players[0].name === ""))
    ){
      return true
    }
    return false
  }

  return (
    <div className="App">
      <Menu getDataUser={getDataUser} leaveGroupHandler={leaveGroupHandler}/>
      {
        // SHOW BOARD WHEN YOU HAVE A NAME 
        infoPlayer.name!== "" &&
        <>
          <Header score={infoPlayer.name === moves.players[0].name?moves.players[0].score:moves.players[1].score} click={changeNormalGame}/>
          {
            moves.moves !== 2 ?
              normalGame?
                <Board changeSelection={changeSelectedOption}/>
              :
                <Bonus changeSelection={changeSelectedOption}/>
            :
              <DuelOnline 
                playerOneOption={moves.players[0]}
                palyerTwoOption={moves.players[1]}
                winner={moves.winner}
                cleanRoom={cleanRoomHandler}
              ></DuelOnline>
          }
          <Rules normalGame={normalGame}/>
        </>
      }
      <Modal showModal={
        ((infoPlayer.name === moves.players[0].name && moves.waiting===1) || (infoPlayer.name === moves.players[1].name && moves.waiting===2)) ||
        waitingForNextPlayer()
        
        }>
        <div className="ModalContent">
          {
            waitingForNextPlayer()===true?<h2>Waiting for a rival</h2>:<h2>Waiting rival's move</h2>
          }
          <Spinner/>
        </div>
      </Modal>
    </div>
  );
}

export default App;
