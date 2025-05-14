const coding = ["js", "java", "ruby", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(values);

// forEach does not return the values,              but filter method does


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {       //scope is introduced so, reutrn should be used
//     return num > 4
// })

// console.log(newNums);

const newNums = []

myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})

console.log(newNums);