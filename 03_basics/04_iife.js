//  Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE 
    console.log(`DB connected`);
})();

( (name) => {
    // unnamed IIFE
    console.log(`DB connected two ${name}`);
})("kk")