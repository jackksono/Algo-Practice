/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/
//input: array
//ouput: array of product of everything but current index in input array

// const getAllProducts = array => {
//   //create output result
//   const output = [];
//   const generate = (result, arrayI, index) => {
//     console.log(result)
//     console.log(index)
//    if (output.length === array.length) return
//    if (array[arrayI] === array[index]) {
//     //check to see if index equals the length of the array because you need to reset it
//     generate(result, arrayI, ++index)
//     }
//   if (index === array.length) {
//         output.push(result);
//         generate(array[arrayI], ++arrayI, index=0)
//     }
//         //multiple by every index
//         result = result* array[index];
//         generate(result, arrayI, ++index)
    
//   }
//   generate(1,0,0)
//   return output
// };

const getAllProducts = array => {
  return array.map((el, i, arr) => {
    let product = 1;
    for(let j = 0; j < arr.length; j++) {
      if(j !== i) product *= arr[j];
    }
    
    return product;
  })
};

console.log(getAllProducts([2,5,3]))
console.log(getAllProducts([1,7,3,4]))
console.log(getAllProducts([2,3]))

module.exports = { getAllProducts };
