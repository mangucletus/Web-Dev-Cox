
// write a program to direct a robot to buy you milk from a aparticular shop
function getMilk(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy "+ calcBottles(money, costPerBottle) + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, costPerBottle);
  }

  function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
  }

  function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
  }

getMilk(20, 2.5);
console.log("Hello master, here is your " + getMilk(20, 2.5) + " change");