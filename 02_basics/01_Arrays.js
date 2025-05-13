//Array
//on copy it pass Reference(share copy)
// array's size can be changed in JS

const arr = [0, 1, 2, 4, 5, 6, 8]

// console.log(arr[2]) 

arr.push(9)
// console.log(arr);
arr.pop()
// console.log(arr);

arr.unshift(0)  //to add in first location
// console.log(arr);
arr.shift()     //remove the first element
// console.log(arr);   

// just like stack but operation is performed on the first element

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

const newArr = arr.join()   //to string

// console.log(arr);
// console.log(newArr);


// slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);

const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);