// #17: Calculate the sum of digits of a positive integer number

// Input: 1235231

/* Expected output
Sum:  17
 */

let str = "1235231";

let arr = str.split("").map((item) => parseInt(item, 10));

let result = arr.reduce((current, sum) => (sum += current));

console.log(result);
