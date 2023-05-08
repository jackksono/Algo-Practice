/*Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the 
primary diagonal.*/

var diagonalSum = function(mat) {
 let n = mat.length;
  let primarySum = 0;
  let secondarySum = 0;
  
  for (let i = 0; i < n; i++) {
    primarySum += mat[i][i]; // add element on primary diagonal
    secondarySum += mat[i][n-i-1]; // add element on secondary diagonal
    
    // exclude element on primary diagonal from secondary sum
    if (n % 2 === 1 && i === Math.floor(n/2)) {
      secondarySum -= mat[i][i];
    }
  }
  
  return primarySum + secondarySum;
}

console.log(diagonalSum(
    [[1,2,3],
    [4,5,6],
    [7,8,9]]))