import {useState} from "react"
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


  const {moves, sendMoveToServer, joinRoom, cleanRoom} = useSocket();
  const [infoPlayer, setInfoPlayer] = useState({name:"",room:""})
  const [canSelectOption, setCanSelectOption] = useState(true)

  const [normalGame, setNormalGame] = useState(true)
  const [score, setScore] = useState(0)

  const getDataUser = (infoPlayer) => {
    setInfoPlayer(infoPlayer)
    joinRoom(infoPlayer)
  }

  const changeSelectedOption = (option) =>{
    sendMoveToServer({...infoPlayer,option:option})
    setCanSelectOption(false)
  }
  
  const changeScore = (point) =>{
    setScore(score+point);
  }
  const changeNormalGame = () =>{
    setNormalGame(!normalGame)
  }
  const cleanRoomHandler = () =>{
    console.log("CLEANING")
    cleanRoom(moves.room)
    setCanSelectOption(true)
  }
 
  return (
    <div className="App">
      {console.log(moves)}
      <Menu getDataUser={getDataUser}/>
      {
        infoPlayer.name!== "" &&
        <>
          <Header score={score} click={changeNormalGame}/>
          {
            moves.moves !== 2 ?
              normalGame?
                <Board changeSelection={changeSelectedOption} canSelect={canSelectOption}/>
              :
                <Bonus changeSelection={changeSelectedOption}/>
            :
              <DuelOnline 
                playerOneOption={moves.player1}
                palyerTwoOption={moves.player2}
                winner={moves.winner}
                cleanRoom={cleanRoomHandler}
              ></DuelOnline>
          }
          <Rules normalGame={normalGame}/>
        </>
      }
      <Modal showModal={(moves.player1.name === infoPlayer.name && moves.moves===1) || (moves.player2.name === infoPlayer.name && moves.moves===1)}>
        <div className="ModalContent">
          <h2>Waiting rival's move</h2>
          <Spinner/>
        </div>
      </Modal>
    </div>
  );
}

export default App;
