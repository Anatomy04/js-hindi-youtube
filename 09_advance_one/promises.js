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

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    }, 2000)

}).then(function(){
    console.log("Asyn 2 resolved")
})