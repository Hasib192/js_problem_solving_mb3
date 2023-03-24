// Create a function to return the longest word(s) in a string

// Input: Create a function to return the longest word(s) in a sentance.

/* Expected output
['function', 'sentance']
 */

let str = "Create a function to return the longest word(s) in a sentence";

let array = str.split(" ");

let max = Number.MIN_VALUE;

for (let i = 0; i < array.length; i++) {
  let word = array[i];
  if (word.length > max) {
    max = word.length;
  }
}

let result = [];

for (let i = 0; i < array.length; i++) {
  let word = array[i];
  if (word.length == max) {
    result.push(word);
  }
}

console.log(result);
