import './App.css';
import Pokedex from "./Pokedex";
import Pokegame from './Pokegame';

/** Main component that renders all other components
 * for Pokedex
 */

function App() {
  return (
    <div className="App">
      <h1>Pokegame!</h1>
      <Pokegame />
      {/* <h1 className='App-title'>Pokedex</h1>
      <Pokedex /> */}
    </div>
  );
}

export default App;
