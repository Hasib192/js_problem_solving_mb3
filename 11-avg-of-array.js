// #11: Calculate the average of the numbers in an array of numbers

// Input: var ar = [1, 3, 9, 15, 90];

/* Expected output
Average: 23.6
 */

var ar = [1, 3, 9, 15, 90];

var result = ar.reduce((current, sum) => sum + current) / ar.length;

console.log(result);
