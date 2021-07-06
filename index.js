
//Image 1
var randomNUmber1= Math.floor(Math.random()*6) + 1;
var randomDiceImage ="images/dice" + randomNUmber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

//Image 2
var randomNUmber2= Math.floor(Math.random()*6) + 1;
var randomDiceImage2 ="images/dice" + randomNUmber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);