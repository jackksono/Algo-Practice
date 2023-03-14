/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
let stair = 1;
while (stair <= n) {
     console.log(` `.repeat(n - stair).concat(`*`.repeat(stair)))
     stair+=1;
     }
};

(drawStairs(6))
/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = n => {
 if (n % 2 === 0){return ``}
 let fillArray = new Array(n).fill(` `);
 //n must be oddd, dont continue if even
     //if n = 1; console log +;
     if (n === 1) {fillArray.push(`+`)
     console.log(fillArray.join(``))}
//if n > 1, want to extend + with `-` on both sides and add `\ | /` on the top and bottom of each
     //else if (n > 1)
};

drawStar(1)

module.exports = { drawStairs, drawStar };
