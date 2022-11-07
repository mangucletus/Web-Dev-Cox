
// get name of user
var myName = prompt("Please what is your name ?");
var firstChar = myName.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = myName.slice(1, myName.length);
restOfName = restOfName.toLowerCase();

var capitalisedName = upperCaseFirstChar + restOfName;

// get age of dog in human years
var dogAge = prompt("How old is your dog? ");
var humanAge = ((dogAge - 2)*4) + 21;
alert("Hello "+ capitalisedName + " your dog is "+ humanAge + "years old in human years");