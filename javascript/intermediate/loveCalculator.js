
var FirstPerson = prompt("Please enter the name of the first person ");
var SecondtPerson = prompt("Please enter the name of the second person ");
// note: fiunction can be use as well
RandomValue = Math.random() * 100;
RandomValue = Math.floor(RandomValue) + 1;
RandomValue = RandomValue++;


if(RandomValue >=40 && RandomValue <= 100){
     console.log("Hey!! " + FirstPerson + " and " + SecondtPerson + " you have " + RandomValue + "% LOVE for each other.\n That is so nice of you guys");
}
else{
    console.log("Hey!! " + FirstPerson + " and " + SecondtPerson + " you have " + RandomValue + "% LOVE for each other.\n This is not encouraging");
}

