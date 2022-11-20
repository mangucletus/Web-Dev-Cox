// for loop
for (let i = 0; i < 5; i++){
    console.log(i); 
}

//do-while
let iterator = 0;
do{
    iterator ++;
    console.log(iterator);
}
while(iterator < 5);

//while
let iterate = 0;
while (iterate < 5) {
    iterate ++;
    console.log(iterate);
}

//for...in
const arr = [3, 6, 1];
arr.foo = "hello";
for(let i in arr){
    console.log(i);
}

//for..of
const arr = [3, 6, 5];
arr.foo = "hello";
for(let i of arr){
    console.log(i);
}