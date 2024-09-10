// ### Task-5:
// Capitalize Every first Letter of each word in a String



const str2 = "capitalize every first letter of each word in a string";

// make string to array:
let charArray = str2.split("");

//use for-loop and condition:
for (let i = 0; i < charArray.length; i++) {
  if (i === 0 || charArray[i - 1] === " ") {
    charArray[i] = charArray[i].toUpperCase();
  }
}
// join every array to make string again
let capitalizedStr = charArray.join("");

console.log(capitalizedStr);
