//Your life in weeks
// create a program using maths and f-strings that tells us how many days, weeks, months we have left if we live until 90 years old.


function lifeInWeeks(age){

var yearsRemainig = 90 -age;
var daysRemaining = yearsRemainig * 365;
var weeksRemaining = yearsRemainig * 52;
var monthsRemaining = yearsRemainig * 12;

console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left.");

}
lifeInWeeks(12);