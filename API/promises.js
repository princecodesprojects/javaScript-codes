//How to create promise

const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async tsk is completed');
        resolve();
    },1000);
});

//promise consume

promiseOne.then(function(){
    console.log("Promise consumed");
})

//Another way of creating promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async tsk 2');
        resolve();
    },1000);
}).then(function(){
    console.log("Async task 2 resolve");
})

//Anothder way

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(typeof user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

const username= promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

