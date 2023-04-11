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