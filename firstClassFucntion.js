// var b=function(){
//     console.log("b called");
// }

// console.log(b());

//named function expression is used to use fuction inside function


//first class function
var b=function abc(a){
        console.log(a);
        return function(){

        }
    }

    function a(){

    }

    let d=b(a);
    console.log(d);

    