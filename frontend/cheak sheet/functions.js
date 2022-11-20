//named function
function myFunction(){
    console.log("hii");
}
myFunction();

// named function with argument
function myFunction(para1){
    console.log(para1);

}
myFunction(10);

//anonymous function
const myFunction = function(){
    console.log("hello");
}
myFunction();

//anonymous function with argument
const myFunction = function(para1){
    console.log(para1);
}
myFunction(48);

//arrow function 
const myFunction =()=>{
    console.log("hello");
}
myFunction()


//arrow function with a single argument
const myFunction =para=>{
    console.log(para);
}
myFunction(34);


//arrow function with two argument
const myFunction =(para1, para2)=>{
    console.log(para1 + para2);
}
myFunction(34, 25);


//concise arrow function with arguments
const mySum = (a, b) => a + b;
console.log(mySum(2, 10));



