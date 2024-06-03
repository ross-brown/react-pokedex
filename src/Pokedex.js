import './Pokedex.css';
import Pokecard from "./Pokecard";

/** Pokedex: Displays all pokemon with their information
 *
 * Props:
 *  - pokemon (array of pokemon objects)
 *  - totalExp (number representing all expereince added up in pokedex)
 *  - isWinner (true/false)
*/

function Pokedex({ pokemon, totalExp, isWinner }) {
  return (
    <div className='Pokedex'>
      {pokemon.map(p =>
        <Pokecard
          id={p.id}
          key={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />)}
      <div className='Pokedex-info'>
        <h1 className='Pokedex-exp'>Total EXP: {totalExp}</h1>
        {isWinner ? <h2 className='Pokedex-winner'>THIS HAND WINS!</h2> : null}
      </div>
    </div>
  );
}


export default Pokedex;
