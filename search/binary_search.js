const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      //binary search left hand side
      rightIndex = middleIndex - 1;
    } else {
      //binary search the right side
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

//Big-Oh = O(logn) => input size reduces by half on each iteration

module.exports = binarySearch;
