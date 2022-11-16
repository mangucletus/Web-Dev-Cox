
const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello world</h1>");

})

app.get("/contact", function(request, response){
    response.send("Conntact me at: mangucletus@gmail.com");
})

app.get("/about", function(request, response){
    response.send(" I am Cletus, I build websites and web applications");
})

app.get("/hobbies", function(request, response){
    response.send("<ul><li>Voluntary work</li><li>Coding</li><li>Music</li></ul>");
})


app.listen(3000, function(){
    console.log("server started on port 3000")
});

