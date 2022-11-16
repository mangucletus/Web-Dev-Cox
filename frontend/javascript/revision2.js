// variables(var, let, const)
let age = 45;
age = 16;
console.log(age)

const numb = 35;
//numb = 45;
console.log(numb)

// data types: primitive data type=> data is directly asign to memory
// thus: strings, numbers boolean, null, underfined, symbol

const name = "Ama";
const num = 23;
const rating = 2.84;
const isCool = true;
const x = null;
const y = undefined;
let z; // also undefined
console.log(typeof num)        // to test for the datatype


// concatenation
const namee = "Asafo";
const agee = 34;
console.log("My name is "+namee+ "and I am "+ agee)
// or can use template String

const hello = `My name is $(namee) and I am $(agee)`;
console.log(hello)

// string properties in a method
const s = " This is the js way";
console.log(s.length)
console.log(s.toLowerCase())
console.log(s.toUpperCase())
console.log(s.substring(0, 5).toUpperCase())

const a = "tech, computer, IT, code"
console.log(a.split(", ")); // it will create an array from the string.


// ARRAYS
const numbers = new Array(1,2,3,4,5,6,7,8) // thats using a constructor

const fruits = ["banana", "mango","orange", "apple", 'pears'];
fruits[3]= "grapes"; // change third item to grapes
fruits.push("ginger"); // add ginger to the last of the array
fruits.unshift("strawberries"); // add strawberries to the beginning

Array.isArray(fruits); // this is true
Array.isArray("yam"); // this is false
fruits.indexOf("apple");
console.log(fruits);

// object literals (key value pairs)
const person ={
    firstName: "Isaac",
    lastName: "Jane",
    age: 39,
    hobbies: ["dancing", "movies", "volleyball"], //array(hobbies) within and object(person)
    address: {street: "sawla fufulso", city: "JTown", houseNo: "AYR 225"}// object(address) within an object(person)
}
console.log(person)
console.log(person.hobbies[1]) //to get movies from the array
console.log(person.address.city) // to get city from the object

// arrays of object 
const todo =[
    {
        id: 23,
        text: "How are you",
        isCompleted: true
    },
    {
        id: 35,
        text: "All about how it began",
        isCompleted: true
    },
    {
        id: 99,
        text: "this is the way out",
        isCompleted: false
    }
];
console.log(todo.id) // to get the id of each object

console.log(todo[1].text) //to get the text of the first object in the array
const todoJSON =JSON.stringify(todo); // passing it as a JSON file to display the array content as a string
console.log(todoJSON) // for loop can also be used

// for loop
for(let i =0; i<10; i++){
    console.log(i)
}



//while loop
let i = 0;
while(i< 10){
    console.log('while loop number: ${i}');
    i++;
}


// other ways of iterating through the array
// forEach loop
todo.forEach(function(todo){
    console.log(todo.text);
});
//map
const todoId= todo.map(function(todo){
    return todo.id;
});
console.log(todoId);
//filter
const todoCompleted = todo.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//map with filter
const todoCompletedd = todo.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
    });
    console.log(todoCompletedd)


    // functions
const addNums =(numb1, numb2)=>{
        return numb1 + numb2;
    }
    console.log(addNums(23, 7));

// function addNums(numb1, numb2){
//     return numb1 + numb2;
// }
// console.log(addNums(23, 7));



// constructor function
function Person(firstName, lastName, doB){
    this.firstName = firstName;
    this.lastName = lastName;
    this.doB = new Date(doB);
    // using methods in the constructor 
    // this.getBirthYear = function(){
    //     return this.doB.getFullYear();
    // }
    // this.getFullName = function(){
    //     return '${this.firstName}  ${this.lastName}';
    // }
}
//prototype removes function properties from the construction when they are not called
Person.prototype.getBirthYear = function(){
    return this.doB.getFullYear();
}
Person.prototype.getFullName = function(){
    return '${this.firstName}  ${this.lastName}';
}
//instantiate object
const person1 = new Person("Handson", "Joe", "7-12-1998");
const person2 = new Person("Adams", "Idrisu", "3-9-2001");
console.log(person2.firstName)
console.log(person1.doB)

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// class can also be used in place of a function
// as shown below
class Person{
    constructor(firstName, lastName, doB){
        this.firstName = firstName;
        this.lastName = lastName;
        this.doB = doB;
    }
    //methods inside the class
    getBirthYear(){
        return this.doB.getFullYear();
    }

    getFullName(){
        return '${this.firstName}  ${this.lastName}';
    }
}  // instantiated objects like that above would work fine!
