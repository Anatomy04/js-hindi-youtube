// var c = 300
let a = 100

// if(true) {
//     let a = 10
//     const b = 20
//     var c = 30      //scope is not defined in var, var is a global variable
//     console.log(a);
// }

// console.log(a);
// console.log(b);
//  console.log(c);

function one(){
    const username = "kk"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "kk"
    if (true) {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);