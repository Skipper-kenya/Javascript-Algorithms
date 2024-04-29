const recursiveBinary = (arr, target) => {
  return Search(arr, target, 0, arr.length - 1); //helper function
};

function Search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  const midPoint = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[midPoint]) {
    return midPoint;
  }

  if (target < arr[midPoint]) {
    return Search(arr, target, leftIndex, midPoint - 1);
  } else {
    return Search(arr, target, midPoint + 1, rightIndex);
  }
}

module.exports = recursiveBinary;
