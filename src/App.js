import logo from './logo.svg';
import './App.css';
import Pokedex from "./Pokedex.jsx"

function App() {
  console.log(Pokedex.defaultProps)
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
