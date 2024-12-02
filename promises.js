//1.Pending
//2.fullfilled
//3.Reject
//Promises are used to handle async operations
//Promise is like a empty objects and after a perticular period of time these objects will filled with data
//when the data will be filled in promise obj then callback atached with promise obj will automatic called
//

// const MakePromise=new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       const arrOne=["html","css","js"];
//       if(arrOne.length>7){
//         resolve("Completed");
//       }else{
//          reject("Not accepted");
//       }
//    },3000)
// });

// MakePromise.then((r)=>{
//     console.log(r)
// }).catch((r)=>{
//     console.log(r)
// })

const cart=["shoes","jeans","shirt"];

const promise=createOder(cart);

promise.then(function(orderId){
   // proceedeToPayment(orderId)
   console.log(orderId);
})
.catch(function(err){
    console.log();
})

function createOder(cart){
   const pr=new Promise(function(resolve,reject){
            
          if(!validateCard(cart)){
             const err=new console.error("Cart is not valid");
             reject(err);
             
          }

          const orderId="12345";

          if(orderId){
            resolve(orderId);
          }


   });

   return pr;
}

function validateCard(cart){
    return false;
}

