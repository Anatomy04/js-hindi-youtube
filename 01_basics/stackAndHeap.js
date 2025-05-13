// Stack (Primitive), Heap (Non-Primitive/Reference)

let myYoutubeName = "xyz"

let anotherName = myYoutubeName //copy or data will be accessed or porvided in anotherName
                                //so, there will be no change in myYoutubeName after changing anotherName

anotherName = "abc"

// console.log(anotherName)
// console.log(myYoutubeName)

let userOne = {
    email: "xyz@google.com",
    user: "xyz@ybl"
}

let userTwo = userOne       //call by reference so, changes will also be shown in the userOne
userTwo.email = "abc@google.com"
userTwo.user = "abc@ybl"

console.log(userOne.email)
console.log(userTwo.email)