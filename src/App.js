import './App.css';
import Pokegame from './Pokegame';

/** Main component that renders all other components
 * for Pokedex
 */

function App() {
  return (
    <div className="App">
      <h1 className='App-title'>Pokegame!</h1>
      <Pokegame />
    </div>
  );
}

export default App;
