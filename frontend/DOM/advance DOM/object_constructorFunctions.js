// constructor functions takes a numner of inputs and doesn't use camel casing, every word in the name is capitalized
// instances of the construuctor function is created using "new" keyword

//objects
var houseKeeper ={
    yearsOfExperience: 12,
    age: 23,
    keeperName: " Ama",
    cleaningArea: ["washroom", "bedroom","lobby"],
    languagesSpoken: ["English", "Twi", "Ga", "Ewe", "Vagli"]

}

//constructor function

function HouseKeeper(yearsOfExperience, age, keeperName, cleaningArea, languagesSpoken){
    this.yearsOfExperience = yearsOfExperience;
    this.age = age;
    this.keeperName = keeperName;
    this.cleaningArea = cleaningArea;
    this.languagesSpoken = languagesSpoken;
    this.clean = function () {
        //alert("cleaning is in progress now!");
        console.log("cleaning is in progress now! "); //a method in a constructor function
    }
}




var houseKeeper1 = new HouseKeeper(5, 25, "Hannah", "kitchen", "Housa"); //creating an instance of HouseKeeper function (constructor function)
console.log(houseKeeper1.languagesSpoken);
console.log(houseKeeper1.clean());