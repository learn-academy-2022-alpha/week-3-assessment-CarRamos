// ASSESSMENT 3: Coding Practical Questions with Jest

const { result } = require("lodash")
const { nextTick, resourceUsage } = require("process")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.

describe("fibSqu", () => {

    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
  
      expect(fibSqu(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibSqu(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

//define a variable 
// define the starting points in the first to positions in a array
//crate a for loop to iterate through a array
//set a condition to add the previous two values together and push those results to an array 
// repeat the length of the inputted value

const fibSqu = (number) => {
 const result = [1,1]
    for (i=2; i<number; i++) {
        let a = result[i-1]
        let b = result [i-2]
        result.push(a+b)
    }

    return result
}

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

describe("onlyOdds", () => {

    it("returns a new array of only odd numbers sorted from least to greatest", () => {
    
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

      expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
    })
  })


// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// crate a variable 
//take in a array and filter number elements 
// filter that array for only odd numbers 
//sort return in ascending fashion 

const onlyOdds = (array) => {

    var numbs = array.filter(
        element => typeof element === "number"
    )
    var odds = numbs.filter(
        value => value %2 !==0
    )
    return odds.sort((a,b) => a-b)
  
}


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("sumOfAll", () => {

    it("returns an array of the accumulating sum. An empty array should return an empty array", () => {
    
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
  


      expect(sumOfAll(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(sumOfAll(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(sumOfAll(numbersToAdd3)).toEqual([])
    })
  })

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

// create a variable 
// use the .map method to iterate through an array taking in the last value and adding the next for the length of the array


function sumOfAll (array) {
    let total = array.map((sum => value => sum += value)(0))
    return total
    }



// b) Create the function that makes the test pass.
