/* Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order. */

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    for(let i = 0; i < nums.length - 3; i++) {
        // skip duplicates
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        for(let j = i + 1; j < nums.length - 2; j++) {
            // skip duplicates
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;

            while(left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if(sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    // skip duplicates
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    while(left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if(sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}