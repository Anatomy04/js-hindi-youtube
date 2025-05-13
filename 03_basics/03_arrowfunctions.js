const user = {
    username: "kk",
    price: 199,

    welcomeMessage: function()  {
        console.log(`${this.username}, welcome to website`);    // this is for current context
        console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "kk"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "kk"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  (num1 + num2)     //implicit return method no need to write the return method

const addTwo = (num1, num2 ) => ({username: "kk"})      //to return the object we use ()

console.log(addTwo(3, 4))