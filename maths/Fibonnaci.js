// 1.PROBLEM STATEMENT
// given a number n find the fibonacci sequence upto n

//2. WHAT IS FIBONACCI SEQUENCE??
//in a fibonacci sequence the numbers present are sum of the preceding two numbers

const fibonacci = (n) => {
  //A fibonacci sequence starts with initial values of 0 and 1
  const fib = [0, 1];

  //we start our loop from 2 (we already have 0 and 1)
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

// from the Analysis above, there's a for..loop so we have  a O(n) complexity => linear time complexity

module.exports = fibonacci;
