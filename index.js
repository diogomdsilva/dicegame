var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var images1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
var images2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png


document.querySelector(".dice .img1").setAttribute("src", images1); //changing img depending on the number
document.querySelector(".dice .img2").setAttribute("src", images2); //changing img depending on the number

var result = document.querySelector("h1"); //fetching h1 tag

//if player 1 wins
if (randomNumber1 > randomNumber2) {
    result.textContent = "🚩 Player 1 Wins!";
}
//if player 2 wins
else if (randomNumber1 < randomNumber2) {
    result.textContent = "Player 2 Wins! 🚩";
}
//draw 
else {
    result.textContent = "Draw!";
}

