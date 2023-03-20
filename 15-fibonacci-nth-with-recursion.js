// #15: Create a function that will find the nth Fibonacci number using recursion

//Input: 10

/* Expected output
55
 */

function findNthFibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
}

console.log(findNthFibonacci(10));
