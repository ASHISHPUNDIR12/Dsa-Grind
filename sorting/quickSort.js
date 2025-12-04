// quick sort
let arr = [3, 1, 2, 4, 6, 5, 7, 9];
const n = arr.length;

function ps(arr, low, high) {
  let pivot = arr[low];
  i = low;
  j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high-1) {
      i++;
    }
    while (arr[j] > pivot && j >= low+1) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j 
}

function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIndex = ps(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

quickSort(arr, 0, n - 1);

console.log(arr)