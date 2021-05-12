import {useState} from "react"
import './App.scss';
import Bonus from './Components/Game/Bonus/Bonus';
import Duel from './Components/Game/Duel/Duel';
import Board from './Components/Game/Normal/Normal';
import Header from './Components/Header/Header';
import Rules from './Components/Rules/Rules';

function App() {

  const [optionSelected, setOptionSelected] = useState("")
  const [score, setScore] = useState(0)

  const changeSelectedOption = (option) =>{
    setOptionSelected(option)
  }
  const changeScore = (point) =>{
    setScore(score+point);
  }
  
  return (
    <div className="App">
      <Header score={score}/>
      {
        !optionSelected?
          <Board changeSelection={changeSelectedOption}/>
        :
          <Duel 
            optionSelected={optionSelected} 
            changeSelection={changeSelectedOption} 
            type //True for Normal, false for Bonus
            changeScore={changeScore}
          ></Duel>
      }

      {/* <Bonus/> */}
      <Rules/>
    </div>
  );
}

export default App;
