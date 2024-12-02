// loops
// for loop
// for(init, conditons, incre, decr)
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(`${i}`);
// }

// let mobile = ["Mobile 1", "Mobile 2", "Moble 3", "Mobile 4"];
// for (let i = 0; i < mobile.length; i++) {
//   console.log(mobile[i]);
// }

// let mobile = ["Mobile 1", "Mobile 2", "Mobile 3", "Mobile 4"];
// let phone = [];
// for (let i = 0; i < mobile.length; i++) {
//   phone.push(mobile[i].toUpperCase());
// }
// console.log(phone);

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i = i + 1;
// }

// do while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// for of  => Array

// let tech = [
//   "HTML",
//   "CSS",
//   "Tailwind",
//   "JavaScript",
//   "ReactJs",
//   "Nodejs",
//   "Express",
//   "MongoDB",
// ];

// for (let anurag of tech) {
//   console.log(anurag);
// }
// let mobile = ["Mobile 1", "Mobile 2", "Mobile 3", "Mobile 4"];
// for (let i = 0; i < mobile.length; i++) {
//   if (mobile[i] == "Mobile 3") {
//     break;
//   }
//   console.log(mobile[i]);
// }

// Object
// {key:value}
let userDetails = {
  firstName: "anurag",
  lastName: "Tiwari",
  compnayName: "iNeuron",
  loginCount: "25",
  role: "student",
  login: true,
};

// console.log(userDetails.firstName);
// console.log(userDetails.lastName);
// console.log(userDetails["firstName"]); // This is Not Good practise

// Object On Hold
// functions

// function squar(num, num2, num3, num4) {
//   //   let num = 2;
//   console.log(num * num);
// }
// squar(2, 3, 4, 5);

// function areaofCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }

// let result = areaofCircle(7);
// console.log(result);

//

// function sumOfAll() {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }

// console.log(sumOfAll(10, 20, 30, 40, 50, 60, 70));

// Arrow Function

// let sumOfAll = (x, y) => {
//   let sum = x + y;
//   return sum;
// };

// let result = sumOfAll(1, 2);
// console.log(result);

// let xyz = function () {};

// Object begins

let userDetailCourse = {
  firstName: "Anurag",
  lastName: "Tiwari",
  role: "student",
  loginCount: 25,
  googleLogin: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is have a course count of ${this.courseList.length}`;
  },
};

userDetailCourse.buyCourse("Pro Frontend Dev");
userDetailCourse.buyCourse("Pro Frontend Dev V2");
console.log(userDetailCourse.getCourseCount());
