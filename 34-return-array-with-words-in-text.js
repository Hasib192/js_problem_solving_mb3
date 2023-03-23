// Create a function that will return an array with words inside a text

// Input: Create a function, that will return an array (of string), with the words inside the text

/* Expected output
['Create', 'a', 'function', 'that', 'will', 'return', 'an', 'array', 'of', 'string', 'with', 'the', 'words', 'inside', 'the', 'text']
 */

let str =
  "Create a function, that will return an array (of string), with the words inside the text";

let isWord = false;
let word = "";
let array = [];

for (let i = 0; i < str.length; i++) {
  let text = str[i];

  if ((text >= "a" && text <= "z") || (text >= "A" && text <= "Z")) {
    isWord = true;
    word += text;
  } else if (isWord) {
    isWord = false;
    array.push(word);
    word = ""; //reset
  }
}

// Also check the last word
if (isWord) {
  array.push(word);
}

console.log(array);
