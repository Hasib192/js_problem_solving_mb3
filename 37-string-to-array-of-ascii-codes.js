// Create a function that will convert a string in an array containing the ASCII codes of each character

// Input: "I like JavaScript"

/* Expected output
[73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116]
 */

let str = "I like JavaScript";

let array = [];

for (let i = 0; i < str.length; i++) {
  array.push(str.charCodeAt(i));
}

console.log(array);
