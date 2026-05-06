
let coin = document.getElementById("coin");

let p1Choice = null;
let p2Choice = null;

let p1Score = 0;
let p2Score = 0;

/* choose */
function choose(player, choice){

    if(player === 1){
        p1Choice = choice;
        document.getElementById("p1Text").innerText = "Selected: " + choice;
    } else {
        p2Choice = choice;
        document.getElementById("p2Text").innerText = "Selected: " + choice;
    }
}

/* flip coin */
function flip(){

    if(!p1Choice || !p2Choice){
        alert("Both players must choose first!");
        return;
    }

    let spin = Math.random()*2000 + 1000;

    coin.style.transform = `rotateY(${spin}deg)`;

    setTimeout(() => {

        let result = Math.random() < 0.5 ? "HEADS" : "TAILS";

        if(result === "HEADS"){
            coin.style.transform = "rotateY(0deg)";
        } else {
            coin.style.transform = "rotateY(180deg)";
        }

        /* scoring */
        if(p1Choice === result) p1Score++;
        if(p2Choice === result) p2Score++;

        document.getElementById("p1").innerText = p1Score;
        document.getElementById("p2").innerText = p2Score;

        checkWinner();

        p1Choice = null;
        p2Choice = null;

        document.getElementById("p1Text").innerText = "Not chosen";
        document.getElementById("p2Text").innerText = "Not chosen";

    },1200);
}

/* winner */
function checkWinner(){

    if(p1Score === 5){
        alert("Player (!) Wins!");
        resetGame();
    }

    if(p2Score === 5){
        alert("Player (2) Wins!");
        resetGame();
    }
}

/* reset */
function resetGame(){
    p1Score = 0;
    p2Score = 0;

    document.getElementById("p1").innerText = 0;
    document.getElementById("p2").innerText = 0;
}