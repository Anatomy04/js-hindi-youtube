// map method 
// it also return the values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);

// by for each

// const newNums1 = []
// myNums.forEach( (num) => {
//     newNums1.push(num + 10)
// })
// console.log(newNums1);

// chaining

const newNums = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
console.log(newNums);