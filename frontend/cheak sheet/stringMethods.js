const { SearchIcon } = require("casalogs-ui");
const { replace } = require("tar");

CharAt()
var txt = "Hello World";
console.log(txt.charAt(0)) // prints "H"

concat()
var str1 = "Hello ";
var str2 = "World";
console.log(str1.concat(str2)) // prints "Hello World"

indexOf()
var txt = "Lets find where 'pen' occurs";
console.log(txt.indexOf("pen")) // print 17

lastIndexOf()
var str = "A dev knows a dev";
var pos = str.lastIndexOf("dev") // prints 14
console.log(pos);

replace()
var str = "Hello dev"
console.log(str.replace("dev", "world")) // prints 'Hello world'

Search()
var str = "hello dev!"
console.log(str.search("dev")) //prints search 

slice(start, end)
var str = "Developers world!";
console.log(str.slice(0, 10)) // prints "Developers"

substr(start, length)
var d = "JavaScript";
console.log(s.substr(4, 6)) // prints "Script"

toUpperCase()
var sentence = "Coding";
console.log(sentence.toUpperCase()) // prints "CODING"


toLowerCase()
var sentence = "Coding";
console.log(sentence.toLowerCase()) // prints "coding"

valueOf()
const a = new String('test');
typeof s; // object
a.valueOf(); // 'test'
typeof s.valueOf(); //striing

trim()
var str = "  Trim both side  ";
console.log(str.trim()) // prints "Trim both sides"


toString()
var num = 15;
console.log(num.toString()) // prints "15" as a string literal


includes()
var str = ' My name is coding'
console.log(str.includes("name")); // prints true

charCodeAt()
var str = 'TEST';
str.charCodeAt(0); // return 84
match()
var str = "lopersum lopersum lopersum lopersum";
console.log(str.match(/sum/g)); //prints ['sum', 'sum', 'sum', 'sum']

split()
var str = " 1, 2, 3, 4, 5";
console.log(str.split(",")); // prints ["1", "2", "3", "4", "5"]