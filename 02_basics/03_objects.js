// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "kk",
    "full name": "kk Singh",   //this value can not be accessed by .
    // mySym: "myKey1",   //not used as a key but instead a new string
    [mySym]: "myKey1",     // now it is referring the symbol mentioned above
    age: 18,
    location: "Jaipur",
    email: "kk@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);  
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "changes@google.com"
// Object.freeze(JsUser)   //locks the object
JsUser.email = "kk@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());