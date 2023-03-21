// // Coding challenge #21: Rotate an array to the right 1 position

// Input: var ar = [1, 2, 3];

/* Expected output
[3, 1, 2]
 */

var ar = [1, 2, 3];
ar.unshift(ar.pop());
console.log(ar);
