// write a program that print the numbers from 1 to 100,
//but for multiples of three print "Fizz" instead of the number and for the multiples of 
// five print "Buzz". 
// for numbers which are multiple of both three and five prnt "FizzBuzz".

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for(i in myArray){
    if(i % 3 ===0 && i % 5 ===0 ){
        console.log("FizzBuzz");
    }
    else if(i % 3 ===0 ){
        console.log("Fizz");

    }
    else if(i % 5 ===0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
   
}


// this also works   coment one of the codes before you run the other

var array = [];
var currentValue = 1;

function fizzBuzz(){

   while (currentValue <= 100) {

    if(currentValue % 3 ===0 && currentValue % 5 === 0){
        array.push("FizzBuzz");
    }
    else if(currentValue % 3 === 0){
        array.push("Fizz");
    }
    else if(currentValue % 5 === 0){
        array.push("Buzz");
    }
    else{
        array.push(currentValue);
    }
    currentValue++;
   }

   console.log(array);

}
fizzBuzz();

//using for loop with a function
var array = [];

function fizzBuzz(){

   for (currentValue === 1; currentValue <= 100; currentValue++) {

    if(currentValue % 3 ===0 && currentValue % 5 === 0){
        array.push("FizzBuzz");
    }
    else if(currentValue % 3 === 0){
        array.push("Fizz");
    }
    else if(currentValue % 5 === 0){
        array.push("Buzz");
    }
    else{
        array.push(currentValue);
    }
    currentValue++;
   }

   console.log(array);

}
fizzBuzz();