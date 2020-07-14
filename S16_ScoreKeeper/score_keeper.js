let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let resetGame = document.querySelector("#reset");
let p1Num = document.querySelector("#p1Num");
let p2Num = document.querySelector("#p2Num");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let maxScore = 5;
let maxScoreDisplay = document.querySelector("p span");
let numInput = document.querySelector("input");


p1.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        if(p1Score === maxScore){
            p1Num.classList.add("winner");
            gameOver = true;
        }
        p1Num.textContent = p1Score;
    }
});

p2.addEventListener("click", function() {
    if(!gameOver){
        p2Score++;
        if(p2Score === maxScore){
            p2Num.classList.add("winner");
            gameOver = true;
        }
        p2Num.textContent = p2Score;
    }
});

resetGame.addEventListener("click", function() {
    reset();
});

function reset() {
    p1Score = 0;
    p1Num.textContent = 0;
    p1Num.classList.remove("winner");
    p2Score = 0;
    p2Num.textContent = 0;
    p2Num.classList.remove("winner");
    gameOver = false;
};

numInput.addEventListener("change", function() {
    maxScoreDisplay.textContent = numInput.value;
    maxScore = Number(numInput.value);
    reset();
});