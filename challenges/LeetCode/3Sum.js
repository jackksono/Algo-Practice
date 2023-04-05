/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.*/

var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort in non-decreasing order
  const n = nums.length;
  const res = [];
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicate elements
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++; // Skip duplicate elements
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--; // Skip duplicate elements
        }
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]))