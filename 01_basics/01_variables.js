const accountId = 14453
let accountEmail = "manish@google.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "mc@mc.com"
accountPass = "212121"
accountCity = "Mumbai"


/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/
console.log(accountId);

console.table([accountId, accountEmail,accountPass, accountCity, accountState]);
