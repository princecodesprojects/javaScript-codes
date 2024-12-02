// let userDetails={
//   firstName:"Prince",
//   lastNAme:"Shukla",
//   course:"MCA",
//   role:"SDE",
//   courseList:[],
//   addCourse:function(c){
//       this.courseList.push(c);
//   },
//   getCourseCount:function(){
//     return `${this.firstName} is purchased course ${this.courseList.length}`;
//   }

// }

// userDetails.addCourse("javaScript");
// console.log(userDetails.getCourseCount());


//
function print(){
     console.log(this);
}

var obj=new print();

console.log(obj);