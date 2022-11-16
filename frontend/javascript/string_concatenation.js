var myName = prompt("What is your name ?");

var firstChar = myName.slice(0, 1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = myName.slice(1, myName.length);
restOfName = restOfName.toLowerCase();

var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello " + capitalisedName);