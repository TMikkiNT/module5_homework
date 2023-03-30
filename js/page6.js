/*Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих 
одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

const arr = [5, 15, 34, 37, 44, 122, 358, 999, 37, 88, 11];
let uniq = [];
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

for (let i = 0; i < arr.length; i++){

if (hasDuplicates(arr)) {
  console.log("Duplicate elements found.");
} else {
  console.log("No Duplicates found.");
}}