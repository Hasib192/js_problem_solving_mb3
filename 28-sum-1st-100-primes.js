// Calculate the sum of first 100 prime numbers

// Input: 10

/* Expected output
Sum of first  10  primes is  129
 */

function isPrime(n2) {
  if (n2 < 2) return false;
  for (let i = 2; i <= Math.sqrt(n2); i++) {
    if (n2 % i == 0) return false;
  }
  return true;
}

function sumPrimes(n1) {
  let i = 2;
  let sum = 0;
  while (n1 != 0) {
    if (isPrime(i)) {
      sum += i;
      n1--;
    }
    i++;
  }
  return sum;
}

console.log(sumPrimes(10));
