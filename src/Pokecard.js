import './Pokecard.css';

const POKE_API_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

/** Displays information about the pokemon */

function Pokecard({ id, name, type, base_experience }) {
  return (
    <div className='Pokecard'>
      <h3 className='Pokecard-name'>{name}</h3>
      <img className='Pokecard-img' src={`${POKE_API_BASE_URL}/${id}.png`} alt="pokemon" />
      <p className='Pokecard-type'>Type: {type}</p>
      <p className='Pokecard-exp'>EXP: {base_experience}</p>
    </div>
  );
}


export default Pokecard;
