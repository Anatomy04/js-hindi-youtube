let myName = "kk    "
let myUername = "Antomy    "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kk = function(){
    console.log('kk is present in all objects');
}

Array.prototype.heyKK = function(){
    console.log('kk says hell0');
}

// heroPower.kk();
// myHeros.kk()

// myHeros.heyKK()
// heroPower.heyKK()

// inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)


let anotherUserName = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"KK".trueLength()
"Icetae".trueLength()