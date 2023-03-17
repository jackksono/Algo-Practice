var findMedianSortedArrays = function(nums1, nums2) {
    // Combine the two arrays into a single sorted array
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const totalLength = mergedArray.length;
  const mid = Math.floor(totalLength / 2);

  // Check if the length of the merged array is even or odd
  if (totalLength % 2 === 0) {
    // If the length is even, return the average of the two middle elements
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    // If the length is odd, return the middle element
    return mergedArray[mid];
  }
}

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,3], [2,7]))