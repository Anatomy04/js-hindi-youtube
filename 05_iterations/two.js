//  for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {  // for each loop
    // console.log(val);
}

const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// this does not work for objects
for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
}

