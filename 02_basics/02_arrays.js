const marvel_heros = ["IRONMAN", "SPIDERMAN", "HULK"]
const dc_heros = [ "BATMAN", "SUPERMAN", "FLASH"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// method1
// to combine the two arrays
const all_Heros = marvel_heros.concat(dc_heros)
// console.log(all_Heros);

// method2
// to combine the multiple arrays
const all_new_heros = [...marvel_heros, ...dc_heros]    //spread method(spread the arrays into individual elements and return them)
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)     //we pass the depth of array in the flat method
// console.log(real_another_array);

console.log(Array.isArray("kk"));
console.log(Array.from("kk"));

console.log(Array.from({name: "kk"}))    //Interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));