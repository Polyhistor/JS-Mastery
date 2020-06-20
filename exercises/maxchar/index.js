// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let biggestChar = 0;

  for (const char of str) {
    charMap[char] ? (charMap[char] = charMap[char] + 1) : (charMap[char] = +1);
  }

  for (const char in charMap) {
    if (charMap[char] > biggestChar) {
      biggestChar = char;
    }
  }

  return biggestChar;
}

module.exports = maxChar;
