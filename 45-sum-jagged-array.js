// Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
// Input: [1, 2, [15, [23], [5, 12]], [100]]
/* Expected output
158
 */

let array = [1, 2, [15, [23], [5, 12]], [100]];
let sum = 0;

function sumJaggedArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sumJaggedArray(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
}

console.log(sumJaggedArray(array));
