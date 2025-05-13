// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 0, 13)
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());   //to compre the time we convert it into milliseconds
console.log(Date.now()); // in milliseconds
console.log(Math.floor(Date.now()/1000));   //seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);    //starts from 0
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "Long"
})