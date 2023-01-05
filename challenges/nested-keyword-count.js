/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
  let count = 0
  let newArr = array.flat(Infinity)
  
  newArr.forEach((element) => {
  if (element === keyword) {
    count++
  }
  })
  return count
};

console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi'))
console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x'))
console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol'))
/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
    let count = 0
    let newArr = array.flat(Infinity)
    let output = []

    for (let i = 0; i < newArr.length; i++) {
        let freq = 0;
        for (let j = 1; j < newArr.length; j++) {
            if (newArr[i] === newArr[j]) {
                freq++
            }
        }
        if (freq > count) {
            output.push(newArr[i])
            count = freq
        }
    }
    return output
};

console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']))
console.log(keywordMode([['ace', 'cool'], ['hi'], 'cool'])) //-> ['bat', 'cars'])

module.exports = {keywordCount, keywordMode};
