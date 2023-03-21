// Reverse a string

// Input: JavaScript

/* Expected output
tpircSavaJ
 */

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

let str = "JavaScript";
// str.split("").reverse().join(""); using built in function
console.log(reverseString(str));
