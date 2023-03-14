/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

const mergeSort = array => {
  if (array.length < 2) return array
 const half = Math.floor(array.length / 2);
 const left = mergeSort(array.slice(0, half));
 const right = mergeSort(array.slice(half));
 return merge (left, right)
}

function merge (left, right) {
  const merged = [];
  let index1 = 0;
  let index2 = 0;
  while (left[index1] !== undefined || right[index2] !== undefined) {
    if (left[index1] < right[index2]) 
      merged.push(left[index1++])
    else if (left[index1 >= right[index2]]) 
      merged.push(right[index2++])
    else merged.push(left[index1++] || right[index2++])
  }
}

//look up heap sort

module.exports = { mergeSort };