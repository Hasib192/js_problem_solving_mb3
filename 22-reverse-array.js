// Reverse an array

// Input: var ar = [1, 2, 3];

/* Expected output
[3, 2, 1]
 */

function reverseArray(ar) {
  let start = 0;
  let end = ar.length - 1;
  while (start < end) {
    let temp = ar[start];
    ar[start] = ar[end];
    ar[end] = temp;
    start++;
    end--;
  }
  return ar;
}

var ar = [1, 2, 3];
// ar.reverse(); using built in function
console.log(reverseArray(ar));
