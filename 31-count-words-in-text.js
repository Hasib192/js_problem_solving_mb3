// Create a function that will return the number of words in a text

// Input:
// sentence1 = ""
// sentence2 = "            "
// sentence3 = "JavaScript!!!   "
// sentence4 = "     JavaScript"
// sentence5 = "    JavaScript is cool      "
// sentence6 = "I like to learn JavaScript with Lead Educare"
// sentence7 = "@@@ !!!"

/* Expected output
0 
0
1
1
3
8
0
 */

function countText(str) {
  str = str.trim().toLowerCase();

  if (str.length == 0) return 0;

  let wordCount = 0;
  let isWord = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= "a" && char <= "z") {
      isWord = true;
    } else if (isWord) {
      wordCount++;
      isWord = false;
    }
  }

  // Also check the last word
  if (isWord) {
    wordCount++;
  }

  return wordCount;
}

console.log(countText(""));
console.log(countText("            "));
console.log(countText("JavaScript!!!   "));
console.log(countText("     JavaScript"));
console.log(countText("    JavaScript is cool      "));
console.log(countText("I like to learn JavaScript with Lead Educare"));
console.log(countText("@@@ !!!"));
