/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
  let mostFrequent = 1;
  let current = 0;
  let number;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        if (array[i] === array[j]) {
            current++;
            if (current > mostFrequent) {
                mostFrequent = current;
                number = array[i];
            }
        }
    }
    current = 0;
  }
  return number
};

console.log(mode([3, 2, 4, 3]))
console.log(mode([7, 5, 8, 8, 2, 5]))

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {
  let output =[];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      output = output.concat(modeNested(array[i]))
    } else {
      output.push(array[i])
    }
  }

  let mostFrequent = 1;
  let current = 0;
  let number;

  for (let k = 0; k < output.length; k++) {
    for (let j = k; j < output.length; j++) {
      if (array[k] === array[j]) {
        current++;
            if (current > mostFrequent) {
                mostFrequent = current;
                number = array[k];
        }
      }
    }
    current = 0;
  }
  return number
};

console.log(modeNested([[3], [2, [4]], 3]))
console.log(modeNested([4, []]))

module.exports = {mode, modeNested};
