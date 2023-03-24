// Find the maximum number in a jagged array of numbers or array of numbers

// Input: [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]

/* Expected output
Max  =  100
 */

let array = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let sum = 0;
let max = Number.MIN_VALUE;

function maxInJaggedArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      maxInJaggedArray(array[i]);
    } else {
      if (array[i] > max) {
        max = array[i];
      }
    }
  }
  return max;
}

console.log(maxInJaggedArray(array));
