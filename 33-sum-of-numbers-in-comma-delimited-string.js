// Calculate the sum of numbers received in a comma delimited string

// Input: 1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9

/* Expected output
57.3
 */

let str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

let array = str.split(",");

array = array.map((i) => parseFloat(i));

// array.forEach((i) => console.log(typeof i));

let result = array.reduce((current, sum) => sum + current, 0);

console.log(result);
