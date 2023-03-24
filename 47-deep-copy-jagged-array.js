// Deep copy a jagged array with numbers or other arrays in a new array

// Input: [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]

/* Expected output
[2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]
 */

let array = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let sum = 0;

function copyJaggedArray(array) {
  let copiedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      copiedArray.push(copyJaggedArray(array[i]));
    } else {
      copiedArray.push(array[i]);
    }
  }
  return copiedArray;
}

console.log("Main array: ");
console.log(array);

console.log("Copied array: ");
console.log(copyJaggedArray(array));
