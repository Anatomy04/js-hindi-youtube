
// ********************1*******************

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calss, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consume");
    
})


// *******************2********************
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    }, 1000)

}).then(function(){
    console.log("Asyn 2 resolved");
})


// **********************3**************************
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "kk", emial: "xyz@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// *********************4***************************
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "kk", password: "123"})
        }
        else {
            reject("ERROR: something is wrong")
        }
    }, 1000)
})

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// })

promiseFour
  .then(user => console.log(user) || user.username)
  .then(username => console.log(username))
  .catch(error => console.log(error))
  .finally(() => console.log("The promise is either resolved or rejected"))



//   ***************5****************
const promiseFive = new Promise((resolve, reject) =>
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "123"})
        }
        else {
            reject("ERROR: javascript went wrong")
        }
    }, 1000)
)

async function consumePromiseFive() {
    try {
        const response_1 = await promiseFive
        console.log(response);
    }   catch (error) {
            console.log(error)
    }
}

consumePromiseFive()




// async function getAllUsers() {
//     try {
//         const response_2 = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response_2.json()
//         console.log(data);
//     }   catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));

