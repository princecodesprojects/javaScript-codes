//Whenever an execution context is created then an lexical environment is also created

// c() function is lexically inside a() function

//function a() is lexically inside global scope  and it has lexical environment with its parent
function a()
{
    var b=10;
    c();
    function c(){
        console.log(b);
        
    }
}


a();
// console.log(b);