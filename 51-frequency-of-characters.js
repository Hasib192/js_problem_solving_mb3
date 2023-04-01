// Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.

// Input: Find the frequency of characters inside a string

/* Expected output
[
  {
    chr: "F",
    count: 1,
  },
  {
    chr: "i",
    count: 4,
  },
  {
    chr: "n",
    count: 4,
  },
  {
    chr: "d",
    count: 2,
  },
  {
    chr: " ",
    count: 7,
  },
  {
    chr: "t",
    count: 3,
  },
  {
    chr: "h",
    count: 2,
  },
  {
    chr: "e",
    count: 5,
  },
  {
    chr: "f",
    count: 2,
  },
  {
    chr: "r",
    count: 4,
  },
  {
    chr: "q",
    count: 1,
  },
  {
    chr: "u",
    count: 1,
  },
  {
    chr: "c",
    count: 3,
  },
  {
    chr: "y",
    count: 1,
  },
  {
    chr: "o",
    count: 1,
  },
  {
    chr: "a",
    count: 3,
  },
  {
    chr: "s",
    count: 3,
  },
  {
    chr: "g",
    count: 1,
  },
];
 */

let str = "Find the frequency of characters inside a string";
let array = [];

for (let s of str) {
  let found = false;
  for (let i = 0; i < array.length; i++) {
    if (s === array[i].chr) {
      array[i].count++;
      found = true;
      break;
    }
  }
  if (!found) {
    array.push({ chr: s, count: 1 });
  }
}

console.log(JSON.stringify(array, null, 2));
