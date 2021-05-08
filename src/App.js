import './App.scss';
import Board from './Components/Game/Board/Board';
import Header from './Components/Header/Header';
import Rules from './Components/Rules/Rules';

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <Rules/>
    </div>
  );
}

export default App;
