/*Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

Примечание: в этом задании использовать promt не нужно.
При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. */

let x = 1;
if (typeof x === "number" && x !== 1)
{
  console.log("x = число");
} 
  else if (typeof x === "string")
{
  console.log("x = Строка");
} 
  else if (x === 1 || x === 0)
  {
    console.log("x = логический");
  }
else 
{
  console.log("x = не определен");
}