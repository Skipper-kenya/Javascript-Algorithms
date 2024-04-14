const recursiveFibonnaci = (n) => {
  if (n < 2) {
    return n;
  }

  return recursiveFibonnaci(n - 1) + recursiveFibonnaci(n - 2);

  //Big O=>O(2^n)=> quite poor compared to the iterative mode
};

module.exports = recursiveFibonnaci;
