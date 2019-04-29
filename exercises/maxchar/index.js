// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {}
    let max = 0
    let maxChar = ''

    // let's get through and see how many of which we have, remember we use for/of for arrays
    for (let char of str) {
        obj[char] === undefined ? obj[char] = 1 : obj[char]++
    }

    // now let's traverse the object and try to count, remember we use for/in for objects
    for (let char in obj) {
        if (obj[char] > max) {
            max = obj[char] 
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;
