// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
let a = "Hello World";

function myFunction(a) {
    let aToArray = a.split("");
    let aMinusThree = aToArray.slice(3, (a.length));
    let result = aMinusThree.join("");
    return result;
}

const resultA = myFunction(a);