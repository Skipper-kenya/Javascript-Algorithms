//Prime Number is a positve number that is only divisible by one or itself

const primeNumber = (n) => {
  const num = n / 2;
  return !Number.isInteger(num);
};

module.exports = primeNumber;
