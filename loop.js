//  1.for loop

// for(let i=0;i<=5;i=i+1)
//     {
//         console.log(i)
//     }

///  2.while loop

// let i=0; 

// while(i<5)
//     {
//         console.log(i);
//         i++; 
//     }


//3.  do-while loop
//    let i=0;
//         do
//         {
//             console.log(i);
//             i++; 
//         }while(i<5)

// 4.for of loop for array

//for of loop is used with iterable objects only

// let tech=["html", "css","js","tailwind","java"];

// let tech1=[];

// for(let s of tech)
//     {
//         let i=0
//         tech1[i]=s;
//         i++;
//     }

//     for(let s of tech1)
//         {
//            console.log(s)
//         }


// 5.for in loop for Objects

// let userDetails={
//     firstName:"Prince",
//     lastNAme:"Shukla",
//     course:"MCA",
//     role:"SDE",
//     courseList:[],
//     addCourse:function(c){
//         this.courseList.push(c);
//     },
//     getCourseCount:function(){
//       return `${this.firstName} is purchased course ${this.courseList.length}`;
//     }
  
//   }

//   for(let obj in userDetails)
// {
//     console.log(userDetails[obj]);
// }

// const map=new Map();

// map.set(1,"One");
// map.set(2,"two")
// map.set(4,"Four");
// map.set(3,"Three");

// for(let key of map)
// {

//     console.log(key[0]);
// }
//return each map

//for in loop for objects

// const obj={
//     java:"for Java",
//     cpp:"C++",
//     c:"for c lang",
//     js:"JavaScript"
// }

// for(const keys in obj)
// {
//     console.log(`${keys} extension for ${ obj[keys]}`);

// }

// 6.forEach  loop

// let language=["c",'cpp',"java","JavaScript"];

// language.forEach(function(items,index,arr){
//     console.log(items,index,arr);
// })

// let coding=[{language:"c",fileName:"c"},{language:"java",fileName:"java",edition:"1st"}]


// coding.forEach((items)=>{
//     console.log(items.edition);
// })

let arr=new Array();
arr[0]=1
console.log(arr.length)
