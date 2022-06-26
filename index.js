let num;
let score = 0;
const header = document.getElementById("header");
const  rollButton = document.getElementById("rollButton");

//------starting a game ---------

// const startGame = () => {}

//---------rolling the dice function ---------

document.getElementById("rollButton").onclick = function() {

    num = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "dice" + num + ".png");

    document.getElementById("score").innerHTML = score;

    score += num;

    if (score > 20) {
        winner();
    }
    else if (num ==1) {
        gameOver();
    }

}

//-------if player loses -------

const gameOver = () => {
    header.textContent = "You lost!"
    
    setTimeout(function () {
        
        window.location.reload();

    }, 1000);
    
}

//--------if player wins -------

const winner = () => {
    header.textContent = "You won!"
    
    setTimeout(function () {

        window.location.reload();

    }, 1000);
}
