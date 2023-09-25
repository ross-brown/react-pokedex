import './App.css';
import Pokedex from "./Pokedex";
import pokemon from './pokemon';

/** Main component that renders all other components
 * for Pokedex
 */

//TODO: import pokemon seed data to pokedex => make default
function App() {
  return (
    <div className="App">
      <h1 className='App-title'>Pokedex</h1>
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
