// selection sort

let arr = [10, 5, 12, 1, 3];
const n = arr.length;

for (let i = 0; i < n - 1; i++) {
  let minimumIndex = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[minimumIndex] > arr[j]) minimumIndex = j;
  }
  if (minimumIndex != i) {
    let temp = arr[i];
    arr[i] = arr[minimumIndex];
    arr[minimumIndex] = temp;
  }
}
console.log(arr)