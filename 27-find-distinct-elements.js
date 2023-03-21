// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

// Input: [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]

/* Expected output
[1, 2, 3, 6, -1, 9, 7, 10, 100]
 */

let array = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];

// Solution 1:
let result = [...new Set(array)];

// Solution 2:
// let result = array.filter((item, index, array) => array.indexOf(item) == index);

console.log(result);
