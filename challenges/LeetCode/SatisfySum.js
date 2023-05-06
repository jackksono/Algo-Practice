/* You are given an array of integers nums and an integer target.

Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. 
Since the answer may be too large, return it modulo 109 + 7.*/

const MOD = 1e9 + 7;

var numSubseq = function(nums, target) {
    
    nums.sort((a, b) => a - b); // Sort the array in non-decreasing order
  let res = 0, n = nums.length, i = 0, j = n - 1;
  
  while (i <= j) { // Loop over all possible subsequence pairs
    if (nums[i] + nums[j] > target) {
      j--;
    } else {
      res = (res + pow2(j - i)) % MOD; // Add the number of valid subsequences with min = nums[i] and max = nums[j]
      i++;
    }
  }
  
  return res;
}

function pow2(n) { // Helper function to compute 2^n modulo MOD
  let res = 1;
  for (let i = 0; i < n; i++) {
    res = (res * 2) % MOD;
  }
  return res;
};