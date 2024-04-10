const express = require("express");

//ALGORITHMS IMPORTS
const fibonacci = require("./Fibonnaci");
const factorial = require("./factorial");

const app = express();

console.log(fibonacci(5));
console.log(factorial(5));

app.listen(3005, () => {
  console.log("server running on port 3005");
});
