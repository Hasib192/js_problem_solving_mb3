// Calculate Fibonacci(500) with high precision (all decimals)

// Input: 500

/* Expected output
139423224561697880139724382870407283950070256587697307264108962948325571622863290691557658876222521294125
 */

let a = BigInt(0);
let b = BigInt(1);

for (let i = 2; i <= 500; i++) {
  let c = a + b;
  a = b;
  b = c;
}

console.log(b.toString());
