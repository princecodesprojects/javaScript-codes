//function along with its lexical scope  forms closer


function x()
{
    var a=24;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();
console.log(z)
z();

//When a function returned then it also returned with its lexical environment means closures