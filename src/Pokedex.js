import Pokecard from "./Pokecard";

function Pokedex({ pokemon }) {
  return (
    <div>
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
