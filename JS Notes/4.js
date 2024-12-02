// For in (Object)
// Higher Order Function (Callback, Setting Time)
// Functional Programming
// Destructuring , Spread and Rest Operator

// for of loop for array
// for in loop for object

// let userDetials = {
//   firstName: "Anurag",
//   lastName: "Tiwari",
//   role: "Admin",
//   loginCount: 25,
// };

// for (let obj in userDetials) {
//   //   console.log(obj);
//   // console.log(userDetials[obj]);
//   console.log(`The key is ${obj} and the Value is ${userDetials[obj]}`);
// }

// HOF

//Callback

// const back = (n) => {
//   return n ** 2;
// };

// function cube(back, n) {
//   return back(n) * n;
// }

// console.log(cube(back, 3));

// time

// setTimeOut

// function courseName() {
//   console.log("Welcome to the JavaScript");
// }

// setTimeout(courseName, 2000);

// setTimeout(() => {
//   console.log("Welcome to JavaScript");
// }, 2000);

// Set Interval

// setInterval(() => {
//   console.log("Daily College");
// }, 2000);

// Functional Programming

// forEach
// const arr1 = ["Hey", "hi", "hello", "Hola", "namste"];

// arr1.forEach((val) => console.log(val));

// const arr1 = [1, 2, 3, 4, 5];
// arr1.map((val1) => console.log(val1 * val1));

// const names = ["hey", "Hi", "Hello", "Rushi", "Veera"];
// console.log(names.map((names) => names.toUpperCase()));

// filter

// const count = [
//   "India",
//   "Japan",
//   "Germany",
//   "Finland",
//   "Kenya",
//   "Nepal",
//   "Ireland",
//   "Egypt",
// ];

// let arg1 = count.filter((arg) => arg.includes("ia"));
// console.log(arg1);

// Reduce

// const num = [1, 2, 3, 4, 5];
// const sum = num.reduce((acc, current) => acc + current, 2);
// console.log(sum);

// Destructuring , Spread and Rest Operator

// const sci = [2.72, 3.14, 9.81, 37, 100, 10000, 152, 167, 52, 304];

// let [num1, num2, ...rest] = sci;

// console.log(num1, num2, rest);

// spread and Rest Op

// function sumOne(x, y) {
//   return x + y;
// }

// let vari = [5, 6];

// console.log(sumOne(...vari)); // Spread
// Rest Op
function sumTwo(...args) {
  let sum = 0;
  for (const x of args) {
    sum = sum + x;
  }
  return sum;
}

console.log(sumTwo(1, 2, 3, 4, 5, 6, 7, 8, 9));
