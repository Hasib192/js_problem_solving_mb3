// #7: Calculate the sum of odd numbers greater than 10 and less than 30

/* Expected output
240
 */
let sum = 0;
let i = 10;

while (i >= 10 && i < 30) {
  if (i % 2 != 0) console.log(i);
  i++;
}

console.log(sum);
