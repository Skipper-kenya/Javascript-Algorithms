const express = require("express");
const linearSearch = require("./linear_search");
const binarySearch = require("./binary_search");
const recursiveBinary = require("./recursive_BinarySearch");

const app = express();

// console.log(linearSearch([1, 2, 3, 4, 5], 1));
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinary([-5, 2, 4, 6, 10], 10));

app.listen(3005, () => {
  console.log("listening at port 3005");
});
