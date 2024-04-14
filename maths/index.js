const express = require("express");

//ALGORITHMS IMPORTS
const fibonacci = require("./Fibonnaci");
const factorial = require("./factorial");
const primeNumber = require("./prime_number");
const recursiveFibonnaci = require("./recursiveFibonnaci");

const app = express();

//CONSOLE STATEMENTS FOR EACH ALGO
console.log(fibonacci(6));
console.log(recursiveFibonnaci(6));
// console.log(factorial(5));
// console.log(primeNumber(5));

app.listen(3005, () => {
  console.log("server running on port 3005");
});
