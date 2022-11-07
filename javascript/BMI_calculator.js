//write a program that calculates the body mass index(BMI) from a user's weight and height
// The BMI is a measure of someone's weight taking into account their height
 
// The BMI is calculated by dividing a person's weight (in kg) by the square of their height (in m)
// BMI = W(kg)/H^2(m^2)  


function bmiCalculator(weight, height){
    var calcValue = (weight/Math.pow(height, 2)).toFixed(4);
    return calcValue; // round calcValue to 4 decimal place
}

var calculatedBMI = bmiCalculator(10, 78.345)
console.log("Your BMI value is: " + calculatedBMI +" kg/m^2" );

