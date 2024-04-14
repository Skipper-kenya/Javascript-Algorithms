const recursiveFactorial = (n) => {
  if (n < 2) {
    return n;
  }

  return n * recursiveFactorial(n - 1);
};

module.exports = recursiveFactorial;
