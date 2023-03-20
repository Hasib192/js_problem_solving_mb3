// #10: Calculate the sum of numbers in an array of numbers

// Input: var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];

/* Expected output
145
 */

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];

var result = ar.reduce((current, sum) => sum + current);

console.log(result);
