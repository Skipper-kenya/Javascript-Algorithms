//PROBLEM STATEMENT
// given an array of 'n' elements and a target element 't'  in the array,find the index of 't' in the array. return -1 if the target element is not found

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

module.exports = linearSearch;
