import {useState} from "react"
import './App.scss';
import Bonus from './Components/Game/Bonus/Bonus';
import Duel from './Components/Game/Duel/Duel';
import Board from './Components/Game/Normal/Normal';
import Header from './Components/Header/Header';
import Menu from "./Components/Menu/Menu";
import Rules from './Components/Rules/Rules';
import useSocket from "./socket";

function App() {


  const {moves, sendMoveToServer} = useSocket();
  const [infoPlayer, setInfoPlayer] = useState({name:"",room:""})
  const [optionSelected, setOptionSelected] = useState("")
  const [normalGame, setNormalGame] = useState(true)
  const [score, setScore] = useState(0)

  const getDataUser = (infoPlayer) => {
    setInfoPlayer(infoPlayer)
    console.log(infoPlayer)
  }

  const changeSelectedOption = (option) =>{
    setOptionSelected(option)
    sendMoveToServer()
  }
  
  const changeScore = (point) =>{
    setScore(score+point);
  }
  const changeNormalGame = () =>{
    setNormalGame(!normalGame)
  }
 
  return (
    <div className="App">
      <Menu getDataUser={getDataUser}/>
      <Header score={score} click={changeNormalGame}/>
      {
        !optionSelected?
          normalGame?
            <Board changeSelection={changeSelectedOption}/>
          :
            <Bonus changeSelection={changeSelectedOption}/>
        :
          <Duel 
            optionSelected={optionSelected} 
            changeSelection={changeSelectedOption} 
            normalGame={normalGame} //True for Normal, false for Bonus
            changeScore={changeScore}
          ></Duel>
      }

      <Rules normalGame={normalGame}/>
    </div>
  );
}

export default App;
