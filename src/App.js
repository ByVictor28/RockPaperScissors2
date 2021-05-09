import './App.scss';
import Bonus from './Components/Game/Bonus/Bonus';
import Duel from './Components/Game/Duel/Duel';
import Board from './Components/Game/Normal/Normal';
import Header from './Components/Header/Header';
import Rules from './Components/Rules/Rules';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Board/> */}
      {/* <Bonus/> */}
      <Duel/>
      <Rules/>
    </div>
  );
}

export default App;
