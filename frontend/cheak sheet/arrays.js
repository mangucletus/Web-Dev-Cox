
["a", "b"].concat(["c"]) //["a", "b", "c"]
["a", "b", "c"].join("~") // "a~b~c"
["a", "b", "c"].slice(1) //["b", "c"]
["a", "b", "b"].indexOf("b") //1
["a", "b", "b"].lastIndexOf("b") //2


[1,2,3].map(x => x * 2) // [2,4,6]
[1,2,3].reduce((x, y) => x * y)  //6
[1,2,3].sort()  //[1,2,3]
[1,2,3].reverse()  //[3, 2, 1]
[1,2,3].length   //3
[1,2,3].every(x => x<5) //true
[1,2,3].some(x => x < 3) // true
[1,2,3].filter(x => x < 2) //[1]
["a", "b", "b"].forEach(x => console.log(x));  //"a" "b" "b"


var arr = [1, 2, 3];
// below operations are on new array arr =[1, 2, 3]
var x = arr.shift() //arr = [2, 3], x=1
var x = arr.unshift(5) // arr=[5, 1, 2, 3], x=4
var x = arr.pop()  //arr=[1,2], x = 3
var x = arr.push(7) //arr=[1,2,3,7]


const months = ["Jan", "March", "April", "June"];
//splice(Index, deleteCount, item)
months.splice(1, 0, "Feb")  //["Jan","Feb", "March", "April", "June"]
months.splice(1, 0, "May")  //["Jan","Feb", "March", "April", "June", "May"]




//Arrays Destructuring 
//1. assigning array items to variables
const [a, b, c] = [123, "second", true];

//2. skipping items
const [, bb] =  [123, "second", true];
//bb=> 'second'

//3. assigning the first values, storing the rest together
const [ax, bx, ...rest] = [123, "second", true, false, 42];
// ax => 123
//bx => 'second'
//rest => [true, false, 42]

//4. swapping variables
let x = true;
let y = false;
[x, y] = [y, x];
//x => false
//y => true
