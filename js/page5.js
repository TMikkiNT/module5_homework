//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const arr = [2, 6, 14, 38, 11, 7, 47, 74];
let n = arr.length;
console.log(n);

for (let i = 0; i < n; i++){
  console.log('arr = [' + i + '] = ' + arr[i]);
}