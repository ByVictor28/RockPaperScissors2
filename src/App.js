import './App.scss';
import Bonus from './Components/Game/Bonus/Bonus';
import Board from './Components/Game/Normal/Normal';
import Header from './Components/Header/Header';
import Rules from './Components/Rules/Rules';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Board/> */}
      <Bonus/>
      <Rules/>
    </div>
  );
}

export default App;
