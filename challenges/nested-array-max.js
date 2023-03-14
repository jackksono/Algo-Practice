
/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/

const nestedArrMax = arr => {
 let newArr = arr.flat(Infinity);
 console.log(newArr)
 let output = 0;
 for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > output) {
            output = newArr[i]
        }
        else return output 
 }
 return output
};

console.log(nestedArrMax([1, 3, 10, 6]))
console.log(nestedArrMax([1, [3, [10], 6]]))
/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

const nestedArrMaxLevel = (arr, level) => {
    let newArr = arr.flat(level -1 );
    let output = 0
    console.log(newArr);
 for (let i = 0; i < newArr.length; i++) {
    if (Array.isArray(newArr[i])) output = output;
    else if (!Array.isArray(newArr[i])){
        if (newArr[i] > output) {
            output = newArr[i]
        }
    }
        else return output
 }
 return output
};

console.log(nestedArrMaxLevel([1, [3, [10], 6]], 1))
console.log(nestedArrMaxLevel([1, [3, [10], 6]], 2))
console.log(nestedArrMaxLevel([1, [3, [10], 6]], 3))
module.exports = {nestedArrMax, nestedArrMaxLevel};