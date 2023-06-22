/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 */

var singleNumber = function(nums) {
    let output = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(nums[i])) continue;
        else output = nums[i]
    }
    return output
};

console.log(singleNumber([2,2,1]))