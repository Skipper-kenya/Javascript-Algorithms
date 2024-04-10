//1. PROBLEM STATEMENT
//find the factorial of numbers upto n

//2. WHAT IS A FACTORIAL
//the factorial on a non negative integer is the product of all positive integers less or equal to n

const factorial = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

module.exports = factorial;
