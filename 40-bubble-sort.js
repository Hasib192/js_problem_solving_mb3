// Implement the bubble sort algorithm for an array of numbers

// Input: [23, 1000, 1, -1, 8, 3]

/* Expected output
[-1, 1, 3, 8, 23, 1000]
 */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

let array = [23, 1000, 1, -1, 8, 3];

console.log(bubbleSort(array));
