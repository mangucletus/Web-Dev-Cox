
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");

})

app.post("/", function(req, res){

    var numb1 =Number(req.body.numb1);
    var numb2 =Number(req.body.numb2);
    var results = numb1 + numb2;
    res.send("The results is: " + results);
})

app.listen(3000, function(){
    console.log("calculator port is 3000");
})