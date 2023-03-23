// Create a function to convert a CSV text to a “bi-dimensional” array

// Input: "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000"

/* Expected output
[["John","Smith","954-000-0000"],["Mich","Tiger","305-000-0000"],["Monique","Vasquez","103-000-0000"]]
 */

let str =
  "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

csv2dimensionArray(str);

function csv2dimensionArray(str) {
  let text = "";
  let result = [];
  for (let c of str) {
    if (c != "\n") {
      text += c;
    } else {
      result.push(text.split(";"));
      text = "";
    }
  }
  if (text.length > 0) {
    // if there is any text left
    result.push(text.split(";")); // Also check the last word
  }
  console.log(result);
}
