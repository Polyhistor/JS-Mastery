// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const a = cleanseAndMap(stringA);
  const b = cleanseAndMap(stringB);

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let char in a) {
    if (a[char] !== b[char]) {
      return false;
    }
  }

  return true;
}

const cleanseAndMap = (string) => {
  const stringFinal = string.replace(/\W/g, "").toLowerCase();
  const charMap = {};

  for (const char of stringFinal) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

module.exports = anagrams;
