
// highr order functions takes other functions as its inputs
function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

// higher order function
function calculator(num1, num2, operator){
    return operator(num1, num2);
}

var results = calculator(20,5,add);
console.log(results);