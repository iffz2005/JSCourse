const accountId = 144553
let accountEmail = "ifrah@gmail.com"
var accountPassword = "12345"
accountCity = "Vadodara"  //it is possibe, but etry not to use it
let accountState;  //undefined value

//accountId = 2  //not allowed 

accountEmail = "iff@gmail.com"
accountPassword = "2121212"
accountCity = "Mumbai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
