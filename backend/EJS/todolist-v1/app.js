const express = require('express');
const bodyParser = require("body-parser");
const { numeric } = require('tar');

const app = express();

let items = [];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    //date format with option keys
    let options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    let today = new Date();

    let day = today.toLocaleDateString("en-US", options)
    // var currentDay = today.getDay();

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    
    //     default:
    //         console.log("Error: Current day is equal to: " + currentDay);
    //         break;
    // }

    res.render('list', {listTitle: day, newListItems: items});
   
    
});

app.post("/", function(req, res){
    let item = req.body.newItem;

    if (req.body.newItem === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/"); // redirect to the home route after adding new list item(s)
    }

  
    
})

app.get("/work", function( req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});

})

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})




app.listen(3000, function(){
    console.log("Server is running on port 3000");
})



