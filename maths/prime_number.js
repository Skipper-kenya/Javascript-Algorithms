//1. determnine if 'n' is a prime no

// Note: a prime number is a natural no greater than one that is not product of two smaller natural numbers

const primeNumber = (n) => {
  if (n < 2) {
    return false;
  }

  //we use math.sqrt() to optimize the solution
  //The above is based on reality that the square root of a number being  checked 'n' in our case, is always larger than one of the natural numbers provided for multiplication

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
};

//big-O=> O(sqrt(n)) => an optimized solution

module.exports = primeNumber;
