const user = {
    username: "kk",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user deatils from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this
}

const userOne = new User("kk", 12, true)
const userTwo = new User("Chai aur code", 12, false)
console.log(userOne);
console.log(userTwo);
