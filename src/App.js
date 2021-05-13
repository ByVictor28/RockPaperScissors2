import {useState} from "react"
import './App.scss';
import Bonus from './Components/Game/Bonus/Bonus';
import Duel from './Components/Game/Duel/Duel';
import Board from './Components/Game/Normal/Normal';
import Header from './Components/Header/Header';
import Rules from './Components/Rules/Rules';

function App() {

  const [optionSelected, setOptionSelected] = useState("")
  const [normalGame, setNormalGame] = useState(true)
  const [score, setScore] = useState(0)

  const changeSelectedOption = (option) =>{
    setOptionSelected(option)
  }
  const changeScore = (point) =>{
    setScore(score+point);
  }
  const changeNormalGame = () =>{
    setNormalGame(!normalGame)
  }
  
  return (
    <div className="App">
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
            type={normalGame} //True for Normal, false for Bonus
            changeScore={changeScore}
          ></Duel>
      }

      <Rules type={normalGame}/>
    </div>
  );
}

export default App;
