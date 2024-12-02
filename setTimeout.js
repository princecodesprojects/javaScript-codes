//setTimeout is a callback function and A callback function is a function passed into another function as an argument


// function x(){
//     var i=10;
//     setTimeout(() => {
//         console.log(i)
//     },3000);
//     console.log("Time Out");
// }

// x();


//with let
// for(let i=1;i<5;i++)
// {
//     setTimeout(() => {
//                 console.log(i)
//             },i*1000);
// }

//with var

for(var i=1;i<5;i++)
    {
        function close(x){
            setTimeout(() => {
                        console.log(x)
                    },x*1000);
        }
        close(i);
    }