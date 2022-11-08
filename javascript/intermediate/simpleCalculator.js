// a program for a simple calculaor
// the user is prompted to input the first value, select a preferred basic operator(+, -, *, /) and input the last value
// the actual results is displayed on the screen or console


const firstDigit = parseFloat(prompt("Enter the first digit: "));
const operator = prompt("Enter an operator: ");
const secondDigit = parseFloat(prompt("Enter the second digit: "));

var results;  // variable to hold the results after performing the operation

if (operator === "+") {
    results = firstDigit + secondDigit;
    
}
else if(operator === "-"){
    results = firstDigit - secondDigit;
}
else if(operator === "*"){
    results = firstDigit * secondDigit;
}

else{
    results = firstDigit/secondDigit;
}
//alert(firstDigit + " "+ operator +" "+  secondDigit + " = " + results);
console.log(firstDigit + " "+ operator +" "+  secondDigit + " = " + results); 