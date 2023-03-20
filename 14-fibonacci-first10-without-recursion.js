// #14: Print the first 10 Fibonacci numbers without recursion

/* Expected output
0
1
1
2
3
5
8
13
21
 */
let firstNum = 0;
let secondNum = 1;
console.log(firstNum);
console.log(secondNum);

for (let i = 2; i < 10; i++) {
  let sum = firstNum + secondNum;
  console.log(sum);
  firstNum = secondNum;
  secondNum = sum;
}
