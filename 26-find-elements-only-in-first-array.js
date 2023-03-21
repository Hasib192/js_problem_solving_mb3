// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

// Input:
// var ar1 = [1, 2, 3, 10, 5, 3, 14];
// var ar2 = [-1, 4, 5, 6, 14];

/* Expected output
[1, 2, 3, 10, 3]
 */

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

// Solution 1:
// let ar = [];

// for (let i = 0; i < ar1.length; i++) {
//   if (!ar2.includes(ar1[i])) {
//     ar.push(ar1[i]);
//   }
// }

// console.log(ar);

// Solution 2:
let result = ar1.filter((i) => !ar2.includes(i));

console.log(result);
