//var b is attached to the global object
//let and const are allocated memory different than var

//in case of let two variable name can not be same in same scope
//in case of let, declaration and  initilization can be seperate
//but in case of var two variable name can be same in same scope

//const is more strint than let and in const declaration and initialization can not seperate

//variable with var can be redeclared in the same block but let and const can not redeclaredin same block

//Var add itself to the window objects



//console.log(a);
// let a;
//  a=10;
// let b=`a`;
// var c=30;

// let a1=[1,2,3];
// let a2=[4,5,6,...a1];

// let [aa,bb,cc]=a1;

// let book={
//   name:"JavaScript",
//   page:200,
//   price:150
// };

// let {n,p,pr} = book;




// console.log(n);
// console.log(a);
// var b=100;

const me={
   name:"prince ",
   surname:"shukla",
   age:23
}
var c=5;
{
   //var b=10;
   
}

for(let key in me)
  console.log(me[key]);
