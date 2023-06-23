/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 */

function singleNumber(nums) {
    const numSet = new Set();
  
    for (let i = 0; i < nums.length; i++) {
      if (numSet.has(nums[i])) {
        numSet.delete(nums[i]);
      } else {
        numSet.add(nums[i]);
      }
    }
  
    return Array.from(numSet)[0];
  }

  function singleNumber(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
      result ^= nums[i];
    }
    
    return result;
  }
  

console.log(singleNumber([2,2,1,1, 3]))