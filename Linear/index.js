const express = require("express");
const linearSearch = require("./linear_search");

const app = express();

console.log(linearSearch([1, 2, 3, 4, 5], 1));

app.listen(3005, () => {
  console.log("listening at port 3005");
});
