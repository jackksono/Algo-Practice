/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
  for (let i = 0; i < array.legnth; i++) {
    if (array[i] === target) {
      return true;
    }
    return false
  }
};

const findInOrderedSet2 = (array, target, startIndex = 0, endIndex = array.length - 1) => {
  let midIndex;

  while (startIndex <= endIndex) {
    midIndex = Math.floor((startIndex + endIndex) / 2);
    // If the midpoint of our search range equals the target, success! 
    if (array[midIndex] === target) return true;
    // If the target is greater than the midpoint, narrow the search range to the larger half
    if (array[midIndex] > target) endIndex = midIndex - 1;
    // If the target is less than the midpoint, narrow the search range to the smaller half
    if (array[midIndex] < target) startIndex = midIndex + 1;
  }


/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {

};

module.exports = { findInOrderedSet, findIn2dMatrix };
const findInOrderedSet3 = (array, target, startIndex = 0, endIndex = array.length - 1) => {
  const mid = Math.floor((startIndex + endIndex) / 2);
  // Basecase 1: If the midpoint of our search range equals the target, success! 
  if (target === array[mid]) return true;
  // Basecase 2: If we've run out of elements to search and still not found the target, it is not in the array. 
  if (startIndex === endIndex) return false;
  
  // Otherwise, make a recursive call with the same array, narrowing the search range to the lower or upper half
  if (target > array[mid]) return findInOrderedSet3(array, target, mid + 1, endIndex);
  if (target < array[mid]) return findInOrderedSet3(array, target, startIndex, mid - 1);
}