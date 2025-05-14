const coding = ["js", "java", "ruby", "cpp"]

coding.forEach( function (val) {
    // console.log(val);
}  )

coding.forEach( (val) => {
    // console.log(val);
})

function printMe(val) {
    // console.log(val);
}

// coding.forEach(printMe)     //pass the reference do not execute the function

coding.forEach( (val, index, arr) => {
    // console.log(val, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "java",
        fileName: "java"
    },
    {
        languageName: "python",
        fileName: "python"
    }
]

myCoding.forEach( (item) => {
    // console.log(item);      //object(item)
    // console.log(item.languageName);
})