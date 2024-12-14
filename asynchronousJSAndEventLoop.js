// console.log("hey0");
// setTimeout(function(){
//     console.log("hey1");
// },0)
// console.log("hey2");

//Promise

// const result=new Promise((resolve,reject)=>{
//         if(0)
//         {
//             return resolve("Resolve ho gay");
//         }else{
//             return reject("Reject ho gaya");
//         }
// })

// result.then(function(m){
//     console.log(m);
// })
// .catch(function(m){
//     console.log(m+"catch");
//     console.log("catch");
// })

//async-await

// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

// abcd();

// async function abcd(){
//     const raw=await fetch(`https://randomuser.me/api/`)
//     const data=await raw.json();
    
//         console.log(data);

// }

// abcd();
