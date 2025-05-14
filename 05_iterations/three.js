const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} is a shortcut for ${myObject[key]}`);
}

const programming = ["js", "java", "cpp", "python"]

for (const key in programming) {
    // console.log(key);   //array is an object by default with key as numbers(index)
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {     //map is not iterative
//     console.log(key);
// }