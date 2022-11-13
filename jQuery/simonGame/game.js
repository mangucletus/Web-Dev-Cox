


var buttonColours = ["red", "blue", "green", "yellow"];


var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

});



  //1. Inside game.js create a new function called nextSequence()
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3) + 1; //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

  var randomChosenColour = buttonColours[randomNumber]; // //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

  gamePattern.push(randomChosenColour);   //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}