//  Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

// Input: 10, 100

/* Expected output
[ 101, 103, 107, 109, 113, 127, 131, 137, 139, 149 ]
 */

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function getPrimes(nPrimes, startAt) {
  let arrayOfPrimes = [];
  while (nPrimes) {
    startAt++;
    if (isPrime(startAt)) {
      arrayOfPrimes.push(startAt);
      nPrimes--;
    }
  }
  return arrayOfPrimes;
}

console.log(getPrimes(10, 100));
