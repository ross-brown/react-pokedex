const POKE_API_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard({ id, name, type, base_experience }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={`${POKE_API_BASE_URL}/${id}.png`} alt="pokemon" />
      <span>Type: {type}</span>
      <span>EXP: {base_experience}</span>
    </div>
  );
}


export default Pokecard;
