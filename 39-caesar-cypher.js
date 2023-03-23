// Implement the Caesar cypher

// Input:
// text = "I LOVE JAVASCRIPT";
// textEnc = encrypt(text, 13);
// textDec = decrypt(textEnc, 13);

/* Expected output
I LOVE JAVASCRIPT
V YBIR WNINFPEVCG
I LOVE JAVASCRIPT
 */

function encrypt(text, code) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let str = text[i].toUpperCase();

    if (str >= "A" && str <= "Z") {
      result += String.fromCharCode(
        ((str.charCodeAt(0) + code - 65) % 26) + 65
      );
    } else {
      result += str;
    }
  }

  return result;
}

function decrypt(text, code) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let str = text[i].toUpperCase();

    if (str >= "A" && str <= "Z") {
      result += String.fromCharCode(
        ((str.charCodeAt(0) - code - 65 + 26) % 26) + 65
      );
    } else {
      result += str;
    }
  }

  return result;
}

let text = "I LOVE JAVASCRIPT";
let textEnc = encrypt(text, 13);
let textDec = decrypt(textEnc, 13);

console.log(text);
console.log(textEnc);
console.log(textDec);
