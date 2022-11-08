// write a program which will select a random name from a list of names, the person 
//selected would have to paye for everybody's food bill

function whoWillPay(names){
    var numberOfPeople = names.length;
    var randomPersonPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPersonPosition];
    
    console.log(randomPerson + " is going to buy lunch today");
}
whoWillPay(["john", "Ama", "Hawa", "Luck", "Bamsa", "Lord", "Frank"]);