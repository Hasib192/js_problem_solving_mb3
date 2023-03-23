// Create a function that will convert an array containing ASCII codes in a string

// Input: [73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116]

/* Expected output
I like JavaScript
 */

let array = [
  73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116,
];

// let str = String.fromCharCode(...array);

let str = "";

for (let i = 0; i < array.length; i++) {
  str += String.fromCharCode(array[i]);
}

console.log(str);
