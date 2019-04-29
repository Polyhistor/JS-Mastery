// We will do problems and solutions in these codes. 
// There will the most famous interview questions and the answers to them, so let's begin :) 

//#1 Reverse a string - 3 ways!

// Favourite!
reverse = (str) => {
    return str.split('').reduce(( reversed, character )=>{
        return character + reversed
    },'')

}

let ans = reverse('hello')
console.log(ans)

// Built-in!
reverse2 = (str) => {
    return str.split('').reverse().join('')
}

let ans2 = reverse2('hello')
console.log(ans2)

// Not bad :) 
reverse3 = (str) => {
    reverse = ""

    for (char of str)  {
        reverse = char + reverse
    }

    return reverse
}

let ans3 = reverse3('hello')
console.log(ans3)


//#2 Check for Palindrome

// First way
palindrome = (str) => {
    const reversed = str.split('').reverse().join('')
    return str === reversed
}

let ans4 = palindrome('abba')
console.log(ans4)

// Second way 
palindrome2 = (str) => {
    str.split('').every( (char,idx) => { 
        return char === str[str.length - 1 - idx]
    }) 
}

let ans5 = palindrome2('abba')
console.log(ans5)


//#3 Reverse an int, should cover negatives and all 

negativeInt = (int) => {
    const reversed = int.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(int)
}

let ans6 = negativeInt(-52)
console.log(ans6)


//#4 find the max char in the string 


// phase 1, let's create an object that stores characters and occurences 

let string = 'aabbccccddddd'
let obj = {}

for (let char of string) {
    obj[char] === undefined ? obj[char] = 1 : obj[char]++
}

console.log(obj)

// phase 2 


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

console.log(maxChar(string))



// #5 lool, fiizbuzz 

function fizzBuzz(n) {
    for (let i=1 ; i <= n ;i++) {
        if ( i % 5 ===0 && i % 3 === 0){
            console.log('fizzbuzz')
        }
        else if ( i % 5 === 0){
            console.log('buzz')
        }
        else if (i % 3 === 0) {
            console.log('fizz')
        }
        else {
            console.log(i)
        }
    }
}



// #6 Arrays and Chunk! tricky! 


chunkSize = (array, size) => {
    let chunked = []

    for (let element of array) {
        last = chunked[chunked.length -1]   

        if (!last || last.length === size) {
            chunked.push([element])
        }
        else {
            last.push(element)
        }
    }

    return chunked
}


const arr2 = [1,2,3,4,5]
console.log(chunkSize(arr2,2))


// Second implementaiton

chunkSize2 = (array,size) => {

    const chunked = []
    let idx = 0

    while (idx < array.length) {
        chunked.push(array.slice(idx, size))
        idx += size
    }

    return chunked
}


const arr3 = [1,2,3,4,5]
console.log(chunkSize2(arr3,2))



// #7 Anangrams

anangrams = (strA, strB) => {
    const charMapA = charMapBuilder(strA)
    const charMapB = charMapBuilder(strB)
    console.log(`length of A is ${Object.keys(charMapA).length} and length of B is ${Object.keys(charMapB).length}`)

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false
    }

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

    return true
}


charMapBuilder = (str) => {
    const charMap = {}

    for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}


console.log(anangrams('koso','sokos'))



// Second implementation


anagrams2 = (str1,str2) => {
    return cleanString(str1) === cleanString(str2) ? true : false
}

cleanString = str => {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}

let ans11 = anagrams2('koso','soko')
console.log(ans11)


// #8 Make first letter capital

capitalizer = (str) => {

    const arrayStr = str.split(' ')
    const capitalized = []

    for (element of arrayStr) {
        capitalized.push(element[0].toUpperCase() + element.slice(1))
    }

    return capitalized.join('')

}


str = 'chos'
console.log(capitalizer(str))


// #9 stars and steps 

printpounds = n => {

    // row
    for (let row=0; row < n ; row++){
        let stair =''

        // column
        for (let column=0; column < n ; column++){

            if (column <= row) {
                stair += '#'
            }
            else {
                stair += ' '
            }
        }
        console.log(stair)
    }

}

printpounds(6)


// Recurisve way

stepsRecursive = (n, row=0, stair='') => {
    // check to see if we have covered all the rows 
    if (n === row) {
        return // just end the execution
    }

    // once we are doing with printing one row, we will proceed to the next, bear in mind two thins: 
    // 1. stair must be printed at this phase
    // 2. we need to reset the stair, this is a little tricky, we haven't set the stair variable so once the recurse if called, this is set to default
    if (n === stair.length) {
        console.log(stair)
        return stepsRecursive(n, row+1)
    }

    // we are checking to see if we only print pounds according to the row. It's a cool logic, for example, once we are in the row 0, pound must be 1, 
    // so the notion of if row >= stair.length does the magic for us. 
    if (row >= stair.length) {
        stair += '#'
    }

    else {
        stair += ' '
    }
    stepsRecursive(n,row,stair)
}

stepsRecursive(7)



// #10 Pyramids

pyramids = (n) => {
    const midPoint = Math.floor( (2*n -1) / 2 )

    for (let row = 0; row < n; row++) {
        let level = ''
        
        for (let column = 0; column < 2 * n -1 ; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += '#'
            }
            else {
                level += ' '
            }
        }
        console.log(level)
    }
}

pyramids(5)



// Recursive way 

pyramidRecurse = (n, row=0, level='') => {

    if (row === n) {
        return
    }

    if (level.length === 2 * n -1) {
        console.log(level)
        return pyramidRecurse(n, row+1)
    }

    const midpoint = Math.floor((n*2-1)/2)
    let add 

    if(midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    }

    else {
        add = ' '
    }
    
    pyramidRecurse(n, row, level + add)

}

pyramidRecurse(3)


// #11 Find the vowels 

vowelDetector = str => {
    let vowels = 'aeiou'
    return str.split('').reduce( ( a, c ) => {
        if (vowels.includes(c)) {
            a +=1        
        }
        return a
    },0)
}

console.log( vowelDetector ('aaaa'))


// Another implementation 

VowelDetecterII = str => {

    let counter = 0
    vowels = 'aeiou'

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            counter += 1
        }
    }

    return counter
}

console.log( VowelDetecterII ('aaaa'))

// Regular Expression 

VowelDetecterIII = str => {

    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0

}

console.log( VowelDetecterIII ('a'))


// #12 Spiral - difficult one!

matrix = n => {

    const results = [];

    for (let i = 0; i < n; i++) {
      results.push([]);
    }
  
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  
      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  
    return results;

}

console.log(matrix(5))


const myMatrix = [ [1,2,3],[4,5,6] ,[7,8,9] ]
console.log(myMatrix[1][2])

