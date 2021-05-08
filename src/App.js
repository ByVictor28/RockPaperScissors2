import './App.scss';
import Game from './Components/Game/Board/Game';
import Header from './Components/Header/Header';
import Rules from './Components/Rules/Rules';

function App() {
  return (
    <div className="App">
      <Header/>
      <Game/>
      <Rules/>
    </div>
  );
}

export default App;
