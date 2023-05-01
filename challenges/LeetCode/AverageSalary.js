/* You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted. */

var average = function(salary) {
    let min = Math.min(...salary);
  let max = Math.max(...salary);
  let sum = salary.reduce((acc, curr) => acc + curr);
  return (sum - min - max) / (salary.length - 2);
};

console.log(average([4000,3000,1000,2000]))