// Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

// Input: 200, 200, 100, 300, 300, 50

/* Expected output
true
 */

// https://www.bbc.co.uk/bitesize/guides/z9pssbk/revision/4#:~:text=Determining%20whether%20two%20circles%20touch,the%20difference%20between%20their%20radii.&text=The%20centre%20of%20one%20circle,1%20or%20d%20%3D%20r%202%20.

let x1 = 200;
let y1 = 200;
let r1 = 100;

let x2 = 300;
let y2 = 300;
let r2 = 50;

console.log(intersectionOfCircles(x1, y1, r1, x2, y2, r2));

function intersectionOfCircles(x1, y1, r1, x2, y2, r2) {
  return d(x1, y1, x2, y2) <= r1 + r2;
}

function d(x1, y1, x2, y2) {
  let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return result;
}
