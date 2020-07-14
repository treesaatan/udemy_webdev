let colors = randomColorGenerator(6);
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i]; // initial colors

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		let clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
		} else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Please Try Again";
		}
	});
}

function changeColors(color) {
    // when won, all elements change to the correct color
    for(let i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let randomCorrect = Math.floor(Math.random() * colors.length);
    return colors[randomCorrect];
}

function randomColorGenerator(num) {
    let arr = [];
    for (let i=0; i<num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}