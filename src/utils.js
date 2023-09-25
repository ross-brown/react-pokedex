import { shuffle, chunk } from "lodash";


/** Takes a array of items, shuffles them, and splits them into 2 arrays.
 *
 * Returns a 2D array [[], []]
 */

function shuffleAndSplit(items) {
  const shuffled = shuffle(items);
  return chunk(shuffled, 4);
}





export default shuffleAndSplit;
