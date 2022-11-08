

function fibonacciGenerator(n){
    myarray = [];
    if (n===1) {
        myarray = [0];
    }
    else if(n===2)
    {
    myarray=[0, 1];
    }
    else{
        myarray = [0, 1];
        for(var i = 2; i < n; i++){
            myarray.push(myarray[myarray.length - 2] + myarray[myarray.length - 1]);

        }   
    }

    return myarray;
}

myarray =  fibonacciGenerator(50);
console.log(myarray);