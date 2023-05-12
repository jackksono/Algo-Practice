/*You are given a 0-indexed integer array nums. You are allowed to permute nums into a new array perm of your choosing.

We define the greatness of nums be the number of indices 0 <= i < nums.length for which perm[i] > nums[i].

Return the maximum possible greatness you can achieve after permuting nums.

 */

var maximizeGreatness = function(nums) {
    nums.sort((a,b) => a - b)
    let res = 0;
    let j = 1;
    for(let i = 0; i < nums.length; i++){
        while(j < nums.length && nums[j] <= nums[i]){
            j++;
        }
        if(j < nums.length && nums[j] > nums[i]){
            j++;
            res++;
        }
    }
    
    return res
};
console.log(maximizeGreatness([1,3,5,2,1,3,1]))