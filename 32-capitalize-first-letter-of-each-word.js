// Create a function that will capitalize the first letter of each word in a text

// Input: Create a function that will capitalize the first letter of each word in a text

/* Expected output
Create A Function That Will Capitalize The First Letter Of Each Word In A Text
 */

let str =
  "Create a function that will capitalize the first letter of each word in a text";

let array = str.split(" ");

for (let i = 0; i < array.length; i++) {
  array[i] = array[i].toString()[0].toUpperCase() + array[i].slice(1);
}

let result = array.join(" ");

console.log(result);
