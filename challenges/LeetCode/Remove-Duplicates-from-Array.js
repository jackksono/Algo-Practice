/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
such that each unique element appears only once. The relative order of the elements should be kept the same.*/

// var removeDuplicates = function(nums) {
//     const output = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (output.includes(nums[i])) continue
//         else output.push(nums[i])
//     }
//     return output
// };


var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0

let uniqueIndex = 0;
for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
        uniqueIndex++;
        nums[uniqueIndex] = nums[i]
    }
  }
  return uniqueIndex + 1
}
console.log(removeDuplicates([1, 1, 2]))