// Shuffle an array of strings

// Input: ["Shuffle", "an", "array", "of", "strings"]

/* Expected output
['strings', 'of', 'an', 'Shuffle', 'array']
 */

let array = ["Shuffle", "an", "array", "of", "strings"];

function randomNumber() {
  const randomIndex = Math.floor(Math.random() * (array.length - 2));
  return randomIndex;
}

let i = randomNumber();
let j = array.length - 1;

while (i < j) {
  [array[i], array[j]] = [array[j], array[i]];
  i++;
  j--;
}

console.log(array);
