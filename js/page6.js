const arr = [5, 15, 34, 37, 44, 122, 358, 999, 35, 88, 11];
let uniq = [];

function hasDuplicates(arr) {
  return arr.every(val => val === arr[0]);
}

if (hasDuplicates(arr)) {
  console.log("Duplicate elements found.");
} else {
  console.log("No Duplicates found.");
}