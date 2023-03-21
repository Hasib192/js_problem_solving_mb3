// Create a function that will merge two arrays and return the result as a new array

// Input:
// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];

/* Expected output
[1, 2, 3, 4, 5, 6]
 */

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

// let ar = ar1.concat(ar2); using built in function

let ar = [];

for (let element of ar1) {
  ar.push(element);
}

for (let element of ar2) {
  ar.push(element);
}

console.log(ar);
