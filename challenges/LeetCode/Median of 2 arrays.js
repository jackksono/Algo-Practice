var findMedianSortedArrays = function(nums1, nums2) {
    let newArray = nums1.concat(nums2);
    let total = 0;
    for (let i = 0; i < newArray.length; i++) {
        total = ( newArray.length)/2
    }
    console.log(total)
    return total
};

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,3], [2,7]))