/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается 
и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. */

const arr = [5, 15, 34, 0, 37, 44, 122, 'stack', 358, undefined, 999, 37, 88, 11, 33, true, undefined]

let even = 0;
let NOTeven = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zero++;
  } else if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      NOTeven++;
    }
  }
}

console.log('chetnoe kol-vo: ' + even);
console.log('nechetnoe kol-vo: ' + NOTeven);
console.log('String kol-vo: ' + zero);
