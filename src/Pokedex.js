import './Pokedex.css';
import Pokecard from "./Pokecard";
import pokemonData from './pokemon';

/** Displays all pokemon with their information */

function Pokedex({ pokemon = pokemonData, totalExp, isWinner }) {
  return (
    <div className='Pokedex'>
      {pokemon.map(p =>
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />)}
      <div className='Pokedex-info'>
        <h1 className='Pokedex-exp'>Total EXP: {totalExp}</h1>
        {isWinner ? <h2 className='Pokedex-winner'>THIS HAND WINS!</h2> : ""}
      </div>
    </div>
  );
}


export default Pokedex;
