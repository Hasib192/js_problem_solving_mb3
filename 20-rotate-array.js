// Rotate an array to the left 1 position

// Input: var ar = [1, 2, 3];

/* Expected output
[2, 3, 1]
 */

var ar = [1, 2, 3];
ar.push(ar.shift());
console.log(ar);
