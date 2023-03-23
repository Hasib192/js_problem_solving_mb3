// Create a function to calculate the distance between two points defined by their x, y coordinates

// Input: 100, 100, 400, 300

/* Expected output
360.5551275463989
 */

// Formula: d=√((x_2-x_1)²+(y_2-y_1)²)
let x1 = 100;
let x2 = 400;

let y1 = 100;
let y2 = 300;

function distanceBetweenPoints(x1, x2, y1, y2) {
  let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return result;
}

console.log(distanceBetweenPoints(x1, x2, y1, y2));
