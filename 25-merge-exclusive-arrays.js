// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

// Input:
// var ar1 = [1, 2, 3, 10, 5, 3, 14];
// var ar2 = [1, 4, 5, 6, 14];

/* Expected output
 [2, 3, 10, 3, 4, 6]
 */

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

// Solution 1:
// let ar = [];

// for (let i = 0; i < ar1.length; i++) {
//   if (!ar2.includes(ar1[i])) {
//     ar.push(ar1[i]);
//   }
// }

// for (let i = 0; i < ar2.length; i++) {
//   if (!ar1.includes(ar2[i])) {
//     ar.push(ar2[i]);
//   }
// }

// console.log(ar);


// Solution 2:
let new_ar1 = ar1.filter((i) => !ar2.includes(i));
let new_ar2 = ar2.filter((i) => !ar1.includes(i));

let result = new_ar1.concat(new_ar2);

console.log(result);
