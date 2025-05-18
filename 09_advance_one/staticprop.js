class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

// const kk = new user("KK")
// console.log(kk.createId());

class teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@phoone.com")
iphone.logMe()
console.log(iphone.createId());