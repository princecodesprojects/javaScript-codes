//Set and Map
// Set => To have unique Elements

// let lang = new Set();
// console.log(lang);
// let lang = ["html", "css", "js", "html", "React", "tailwind", "React"];
// let langs = new Set();
// langs.add("html");
// langs.add("css");
// console.log(langs);
// console.log(langs.size);

// Maps

// let yes = new Map();
// // console.log(yes);

// yes.set("1", "Vijay");
// yes.set(1, "veera");
// yes.set(true, "Biswajit");

// console.log(yes);

// Closure
// Scope Chaining => Reseach Topic

// function outer() {
//   const names = "iNeuron";
//   function inner() {
//     console.log(names);
//   }
//   inner();
// }
// outer();

// function outer() {
//   const names = "iNeuron";
//   function inner() {
//     console.log(names);
//   }
//   return inner;
// }
// let kywd = outer();
// kywd();

// Event Loop => Reseach Topic
// Promises

// 1. Pending => Ruq send
// 2. Fullfilled => Accept
// 3. Reject => Deci

// const userOne = () => {
//   console.log("User One");
// };
// const userTwo = () => {
//   setTimeout(() => {
//      console.log("User two");
//   }, 3000);
// };
// const userThree = () => {
//   console.log("User Three");
// };

// userOne();
// userTwo();
// userThree();

// Promise

// const MakePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const arrone = ["html", "css", "js", "typescript"];
//     if (arrone.length > 7) {
//       resolve("Completed");
//     } else {
//       reject("Not correct data");
//     }
//   }, 3000);
// });

// MakePromise.then((result) => {
//   console.log(result);
// }).catch((result) => {
//   console.log(result);
// });

// Async await

const userOne = () => {
  console.log("User One");
};
const userTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Login Completed");
    }, 2000);
  });
};
const userThree = () => {
  console.log("User Three");
};

const callme = async () => {
  let Valone = userOne();
  console.log(Valone);

  let valtwo = await userTwo();
  console.log(valtwo);

  let valthree = userThree();
  console.log(valthree);
};

callme();
