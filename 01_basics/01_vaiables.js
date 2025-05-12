const accountId = 13245
let accountEmail = "kk@google.con" //only use let and const for variables
var accountPassword = "124235"
accountCity = "Jaipur"

// accountId = 2  can't change

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hudsk@google.com"
accountPassword = "21224214"
accountCity = "Agra"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);