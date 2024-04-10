const express = require("express");

//ALGORITHMS IMPORTS
const fibonacci = require("./Fibonnaci");

const app = express();

console.log(fibonacci(10));

app.listen(3005, () => {
  console.log("server running on port 3005");
});
