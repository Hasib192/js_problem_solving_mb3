// Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.

// Input: 10

/* Expected output
 [3, 5, 6, 1, 9, 2, 4, 10, 8, 7]
 */

let n = 10;
let array = [];

for (let i = 1; i <= n; i++) {
  array.push(i);
}

for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(array);
