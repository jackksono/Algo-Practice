/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.*/

var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;
    max = Math.max(max, area);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([4,3,2,1,4]))