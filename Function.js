//1. Normal function

// function Square(i){
//     return i*i;
// }

// let r=Square(2);

// console.log(r);

//2. Rest arguments
// function sumOfAll()
// {
//     let sum=0;
//    for(let i=0;i<arguments.length;i++){
//       sum=sum+arguments[i];
//    }
//    return sum
// }

//   console.log(sumOfAll(10,20));

//3. Arrow function

// let sum=(x,y)=>{
//    console.log(x,y);
// }

// sum(1,2);

// let xyz=function(){

// }


//Higher Order Functions

//1. Callbacks

// const back=(n)=>{
//    return n**2;
// }

// function cube(back,n){
//     return back(n)*n;
// }

// let r=cube(back,2);

// console.log(r);

// 2. Time

//setTimeOut

// function courseName(){
//     console.log("Welcome to javaScript");
// }

// setTimeout(courseName,3000);


// setTimeout(()=>{
//     console.log("Welcome to javaScript");
// },2000);

//Set Interval

// setInterval(()=>{
//     console.log("Welcome to javaScript");
// },2000);

///Functional Programming

//1. forEach, it returns nothing

// let arr=["hii","hello"];

// arr.forEach((value)=>{
//     return console.log(value+" prince");
// })

//2. Map
//it also returns array
let arr=[1,2,3,4,5];
//chaining
let nums=arr.map((val1)=>val1*val1).map((num)=>num+10).filter((n)=>n>=15);  

console.log(nums);

//3. Filter, 
//It return array

// let count=["India","USA","Nepal"];
// let nums=[1,2,3,4,5];

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// let n=books.filter((n)=>{return n.genre==="Science" && n.edition>=2000})
// console.log(n);

// let arg1=count.filter((arg)=>arg.includes("ia"));

// console.log(arg1);

//4. Reduce

// const arr=[1,2,3,4];
// const initialValue=1;
// const sum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);

// console.log(sum);

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// let tottal=shoppingCart.reduce((acc,item)=>acc + item.price,0)

// console.log(tottal);

//Destructing and spread and Rest operator

// let sci=[1,2,3,4,5,6,7,8,9];

// // let [a,b,c,d,e]=sci;  Destructing
// // 
// let [n1,n2,...rest]=sci;

// console.log(n1,n2,rest);

// function sumOne(x,y)
// {
//     return x+y;
// }

// let vari=[5,6,4];

// console.log(sumOne(...vari));//Spread

// function sumTwo(...args){
//     let s=0;

//     for(let x of args){
//         s=s+x;

//     }
//     return s;
// }

// console.log(sumTwo(1,2,3,4,5));
