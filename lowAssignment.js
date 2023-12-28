// Question no 1

console.log("hello World");

// Question no 2

function sumNum(a, b) {
  return a + b;
}
console.log(sumNum(5, 7));

// Question no 3

function isEven(number) {
  return number % 2 === 0;
}
let result = isEven(6);
console.log(result);

// Question no 4

var array = [3, 1, 7, 4, 8];
var largest = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest);

// Question no 5

function reverseString(str) {
  return str.split("").reverse("").join("");
}

let resultA = reverseString("Hello");
console.log(resultA);
