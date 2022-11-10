//jQuery = $
//$(document).ready(function(){$("h1").css("color", "red")}); // the ready method is used when the jQuery script is placed in the "head" tag

//$("h1").css("color", "red"); // change color of a selector

$("h1").addClass("big-title margin-50"); // adding more classes

//manipulating text
$("button").text("I am a button");

//adding html
$("button").html("<em>Hey click me</em>");

//manipulating attributes
$("a").attr("href", "https://www.yahoo.com");

$("img").attr("src")

//adding event listeners
// $("h1").click(function(){
//     $("h1").css("color", "purple")
// });

for(var i = 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";

    })
}
//the above can be written with jQuery as:

$("button").click(function(){
    $("h1").css("color", "purple");
})

//detect keypress with jQ
$("input").keypress(function(event){
    console.log(event.key);
});

//flexible of way adding event listeners
$("h2").on("mouseover", function(){
    $("h2").css("color", "purple")
})
//animation
$("button").on("click", function(){
    $("h2").fadeToggle();
})
//or
$("button").on("click", function(){
    $("h2").slideUp().slideDown().animate({opacity: 0.5});
})


//adding and removing  elements using "before()", "after()", "prepend()", "append()", "remove()" etc
