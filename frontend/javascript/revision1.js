// Quick tutorial on javaScript

// Sets
const nummm = new Set()

const a = "a";
const b = "b";
const c = "c";

num.add(a);
num.add(b);
num.add(c);
console.log(num);

const numb = new Set(["a", "b", 5, "c", 18, "d"]);
let text = "";
numb.forEach(function(value){
    text += value;
 })
console.log(numb)
numb.values()

// maps: has key-value pairs
const fruits = new Map([ ["apples", 500], ["bananas", 300], ["oranges", 200]]);
  fruits.values()

  // adding elements to a Map using set() method
  const population = new Map();
  population.set("Kumasi", 20000);
  population.set("Tuna", 3000);
  population.set("Tamale", 23000);
  population.set("Kumasi", 1200);

  console.log(population);
  console.log(population.get("Tuna"));
  console.log(population.size);

  // get the value of a key in a Map using get() method
  const city = new Map([["Ghana", 3], ["Morocco", 7], ["Niger", 2] ]);
  console.log(city);
  console.log(city.size);
  console.log(city.get("Ghana"));

  // using "this" key word, "this" refers to an object
  const person = {
    firstName: "John",
    lastName : "Ansa",
    id       : 55,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


  // arrow functions, they return value by default

  // before:
  const hello = function(){
    return " Hello World"
  }
  // now:
  const helo =()=>{
    return "Hello World!!!"

  }
// if the function has one statement, and the statement return a value:
const helloo = ()=> "Hello World!"




//javascript notes
// HTML: defines content of web pages
// CSS: Specify the layout of web pages
// JAVASCRIPT: to program the behavior of web pages

// It separates HTML and code
// It makes HTML and JavaScript easier to read and maintain
// Cached JavaScript files can speed up page loads


// references of some important concepts in javascript 
// variable declaration in js

const { x } = require("tar");

//First step
let newVariable = 45;
const another_variable = "we are monarchs";
console.log(newVariable);
console.log(another_variable)

// functions in different forms
function new_func() {
  return "This function is called new_func(). ";
}
console.log(new_func)

const MyFunc = function () {
    return "This function is also called MyFunc() "
};
console.log(MyFunc)

const MyFunc1 = () => {
  return "This is called arrow function"
}; // called arrow function 
console.log(MyFunc1)
  
// (() => {})    null function: it calls its self

// 
// the null function is rewritten as: ()(function () {})();


let new_funcs = 54;
let func = new_funcs;
console.log(func);  // 54 will be printed on the screen

// declaring Arrays
let new_array = [12, 43, "trey", true, 78.965];
console.log(new_array[0]); // accessing the first element in the array
console.log(new_array.length); // get the array length

// for loop
for (let m = 0; m < new_array.length; m++) {
  console.log(new_array[m]);
}

let num = [12, 43, 29, 33, 324, 123];

// Find a number greater than 28 by 1(look for 29 in the array)

for (let m = 0; m < num.length; m++) {
  if (num[m] - 28 === 1) {
    console.log(num[m]);
  }
}

// Eliminate odd numbers
let array1 = [2, 3, 4, 5, 6, 7, 8, 9];

// Iteration Arrays using "forEach", "map", "filter" and "find"

let vv = function (element) {
    return "Testing this function"
};
console.log(vv)
// the above function can also be written as;
let wv = (element) => { 
    return "Testing another function"
};
console.log(wv)

// using "forEach" in iteration
array1.forEach((element,index) => {
console.log(element,index)
});


// using "map" in iteration
let hh = array1.map((element)=> element*2)
console.log(hh)


// using "filter" in iteration
let gg = array1.filter((f)=> f >4 )
console.log(gg)

// using "find" in iteration
let rr = array1.find((ff)=>{
   return  ff === 7  // "===" is used for stability sake
})
console.log(rr)



// Objects: they have keys and values
let obj ={
   varNum: 67,
   varStr: "John",
   arr: [2,'dog',true],
   ob:{ h1:85, h2: "Ama"}, // this is an object in an object
    ww: function(){
    return "I am a function in an object"
    }  // a function in an object
}
let nn=obj.arr[1]
console.log(nn)

//Object iteration using "entries", "keys" and "values"
// entries will return the elements in the object, their keys and values
Object.entries(obj).forEach(element => {
    console.log(element)
});
// keys return only the keys of the elements in the object
Object.keys(obj).forEach(element => {
    console.log(element)
})
// values return only the values of the elements in the object
Object.values(obj).forEach(element => {
    console.log(element)
})


// some trials
var numberOfDogs = 16 ; // number
var nameOfDog = "Peace"; // string
var hasDog = true; // boolean 
var cars = ["Toyota", "LandCruser"];  // an array
var owner = {myName: "CletusSojaMan"};  // object

console.log(numberOfDogs);  
console.log(nameOfDog);  
console.log(hasDog);  
console.log(cars[1]);  
console.log(owner.myName);  

//for loop 
for (let x=0; x< 10; x++){
  console.log("Current number is: "+ x);
}

// while loop
let y = 0;
while( y < 10){
  console.log("Numb is: " + y)
  y++;
}
// do while loop
var z = 0;
do{
  console.log("Number is now: " + z);
  z ++;
}while(z<10)

// break keyword
var w = 0;
while(w<10){
  if(w==5){
    break;
  }
  console.log(w);
  w++;
}

//arrays 
var names = ["Ajua", "Hudu", " John", "Andrews", "Halim", "Collins", "Felicin"];
console.log(names[3]);
var positions = [];
positions[0]= "Admin";
positions[1]= "Organizer";
positions[2]= "cleaner";
positions[3]="lecturer";
console.log(positions);
console.log(positions.length);

// useful functions in javascript 
var i = document.getElementById(test1);
x.innerHTML = " How you doing today"
var j = document.createElement("Button")

//function from 'math' object
var xx = Math.pow(5, 4); // x = 625, powers of numbers
var yy = Math.sqrt(x); // y = 25, square root
var zz = Math.abs(-7); // z = 7, absolute value 
var ii = Math.ceil(3.2); // i = 4, round decimal up to a whole number
var jj = Math.floor(3.2); // j = 3, round decimal down to a whole number 
var kk = Math.round(3.2); // k = 3, normal rounding of decimal numbers as usual 

// setInterval function
var xxx = setInterval(() => {
  console.log("Treasure Hunt Day!!");
}, 1000); // the function is called every 1000 milliseconds
console.log(xxx);

clearInterval(xxx); // stops the interval by it's Id
console.log("Treasure Hunt is Over!!!")







