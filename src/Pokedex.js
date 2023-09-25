import './Pokedex.css';
import Pokecard from "./Pokecard";

/** Displays all pokemon with their information */

function Pokedex({ pokemon }) {
  return (
    <div className='Pokedex'>
      {pokemon.map(p =>
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />)}
    </div>
  );
}


export default Pokedex;
