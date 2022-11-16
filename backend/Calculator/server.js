const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res){

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmiValue = (weight/Math.pow(height, 2)).toFixed(4);
    res.send("Your BMI is: " + bmiValue + " kg/m^2");
})

app.listen(3000, function(){
    console.log("bmi calculator hosted at port 3000");
})