

function isLeapYear(year){
    if(year % 4 ===0){
        if(year % 100 ===0){
            if(year % 400 ===0){
                console.log(year + " Leap year ");
            }
            else{
                console.log(year + " Not a Leap year ");
            }
        }
        else{
            console.log( year + " Leap year ");
        }
    }
    else{
        console.log( year + " Not a Leap year ");
    }
    
}

isLeapYear(2001);
isLeapYear(2002);
isLeapYear(2003);

isLeapYear(2024);
isLeapYear(2400);
isLeapYear(1988);
isLeapYear(1992);
isLeapYear(1996);

