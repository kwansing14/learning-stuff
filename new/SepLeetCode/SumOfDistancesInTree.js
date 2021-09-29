/*
Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
*/

const n = 6;
const edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
  [2, 5],
]; // [8,12,6,10,10,10]

const checkLinked = (array, x, y) => {
  if (array[0] === x || array[0] === y) {
    if (array[1] === x || array[1] === y) {
      return 'matched';
    }
    return array[1];
  }
  if (array[1] === x || array[1] === y) {
    if (array[0] === x || array[0] === y) {
      return 'matched';
    }
    return array[0];
  }
  return undefined;
};

const sumOfDistancesInTree = function (n, edges) {
  let total = 0;
  // for (let i = 0; i < n - 1; i++) {
  // let i = 0;
  // console.log(edges[i]);
  for (let i = 0; i < n - 1; i++) {
    let arrNumber = 0;
    for (let j = 0; j < n; j++) {
      if (j === i) {
        j++;
      }
      console.log('i--', i, 'j--', j);
      console.log('array', edges[arrNumber]);
      const res = checkLinked(edges[arrNumber], i, j);
      console.log('res-', res);
      if (res === 'matched') {
        console.log('match', total);
        arrNumber++;
        j = 0;
      }
      if (typeof res === 'number') {
      }
    }
  }
  // }
  console.log('total:', total);
};

sumOfDistancesInTree(n, edges);
