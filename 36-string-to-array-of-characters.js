//  Create a function that converts a string to an array of characters

// Input: "I like JavaScript"

/* Expected output
['I', ' ', 'l', 'i', 'k', 'e', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
 */

let str = "I like JavaScript";

// let array = Array.from(str);
// OR
// let array = [...str];

let array = [];

for (let i = 0; i < str.length; i++) {
  let text = str[i];

  array.push(text);
}

console.log(array);
