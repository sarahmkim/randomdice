var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomImage = "dice"+randomNumber1+".png";
var randomImageSrc = "images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomImage2 = "dice"+randomNumber2+".png";
var randomImageSrc2 = "images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}else if (randomNumber1 = randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
