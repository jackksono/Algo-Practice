/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/


const twoSum = (arr, target) => { 
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {return true}
    
//   }
// }
// return false

let cache = {};
for (let i in arr) {
  let missing = target - arr[i];

  if (missing in cache) {
    return true
  }
  cache[arr[i]] = i
}
return false
}

const nums = [2, 5, 11, 15]
console.log(twoSum(nums, 13))
console.log(twoSum(nums, false))
/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => { 
  /* Better attempt  O(n²)  
   This method uses three pointers where the first pointer is
   fixed for the first iteration while the other two increment and decrement. 
   Pointer 1: starts at the first element in the array 
   Pointer 2: starts at the second element in the array
   pointer 3: starts at the last element in the array.
   As we sum the three elements, if the sum is less than the target
   we will need a larger number. Since the array is sorted, we can increase 
   pointer 2 for a larger additive. If the sum of the three is larger than the target,
   we will decrement the last pointer since the larger element is at the end of the array.
   Big O Analysis (where n is the number of elements)
   Time Complexity: O(n²)
   Space Complexity: O(n) : since we are making a copy of the array and sorting the elements in the copy.
  */

   const copyArr = [...arr];
   copyArr.sort((a, b) => a - b);
   for (let i = 0; i < copyArr.length - 2; i += 1) {
     let j = i + 1;
     let k = copyArr.length - 1;
     while (j < k) {
       if (copyArr[i] + copyArr[j] + copyArr[k] === target) return true;
       else if (copyArr[i] + copyArr[j] + copyArr[k] < target) j += 1;
       else k -= 1;
     }
   }
   return false;
 }

 //const nums = [2, 5, 11, 15]
 console.log(threeSum(nums, 31))




module.exports = { twoSum, threeSum };