// Create a function that will convert a string containing a binary number into a number

// Input: "11111111"

/* Expected output
255
 */


function binaryToDecimal(binary) {
  let decimal = 0;
  let multiplier = 1;

  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += multiplier;
    }
    multiplier *= 2;
  }

  return decimal;
}

let binaryString = "11111111";
let decimalNumber = binaryToDecimal(binaryString);
console.log(decimalNumber);

