// Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

// Input:
// var n1 = "2909034221912398942349";
// var n2 = "1290923909029309499";

/* Expected output
2909034221912398942349 
 1290923909029309499 
 2910325145821428251848
 */

 let n1 = "2909034221912398942349";
 let n2 = "1290923909029309499";

let sum = (BigInt(n1) + BigInt(n2)).toString();

console.log(n1);
console.log(n2);
console.log(sum);