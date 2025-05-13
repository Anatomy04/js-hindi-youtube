// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log(result);

function loginUserMessage(username = "sam"){        //predefined value
    if(!undefined){     //undefined is false like an empty string ""
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());    //if empty undeffined will be passed

function calculateCartPrice(val1, val2, ...num1){       //... is rest operator and it is also spread operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "kk",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);

const myArr = [100, 200, 300, 400]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myArr));