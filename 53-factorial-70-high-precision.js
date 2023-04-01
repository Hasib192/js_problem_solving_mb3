// Calculate 70! with high precision (all digits)

// Input: 70

/* Expected output
11978571669969891796072783721689098736458938142546425857555362864628009582789845319680000000000000000
 */


let n = BigInt(70);
let result = BigInt(1);

for (let i = 1n; i <= n; i++) {
  result *= i;
}

console.log(result.toString());