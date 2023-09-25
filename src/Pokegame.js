import Pokedex from "./Pokedex";
import pokemonData from './pokemon';
import shuffleAndSplit from "./utils";


/** Takes in an array of pokemon objects and calculates the total expereince of
 * all the pokemon.
 *
 * Returns the total experience.
 */

function calculateTotalExp(hand) {
  return hand.reduce((acc, curr) => {
    acc += curr.base_experience;
    return acc;
  }, 0);
}



function Pokegame({ pokemon = pokemonData }) {
  const [hand1, hand2] = shuffleAndSplit(pokemon);
  const exp1 = calculateTotalExp(hand1);
  const exp2 = calculateTotalExp(hand2);

  return (
    <div className="Pokegame">
      <Pokedex
        pokemon={hand1}
        totalExp={exp1}
        isWinner={exp1 > exp2 ? true : false}
      />
      <hr></hr>
      <hr></hr>
      <Pokedex
        pokemon={hand2}
        totalExp={exp2}
        isWinner={exp2 > exp1 ? true : false}
      />
    </div>
  );
}

export default Pokegame;
