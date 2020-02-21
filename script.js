var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function setGradient(color1, color2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1
	+ ", " 
	+ color2
	+ ")";

	css.textContent = body.style.background + ";";
}

function setManualGradient() {
	setGradient(color1.value, color2.value);
}

// function getRandomColor() {
// 	var colorList = "rgb(";
// 	var temp;
// 	for (var i=0; i < 3; i++) {
// 		temp = Math.floor(Math.random()*256);
// 		colorList += String(temp);
// 		if (i < 2) {
// 			colorList += ", ";
// 		}
// 	}
// 	colorList += ")";
// 	return colorList;	
// }

function getRandomColor() {
	var colorList = "#";
	var temp;
	for (var i=0; i < 3; i++) {
		temp = Math.floor(Math.random()*256);
		temp2 = temp.toString(16);
		if (temp2.length < 2) {
			temp2 = "0" + temp2;
		}
		colorList += temp2;
	}
	// console.log(colorList);
	return colorList;	
}

function setRandomGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient(color1.value, color2.value);
}

setManualGradient();

color1.addEventListener("input", setManualGradient);

color2.addEventListener("input", setManualGradient);

randomButton.addEventListener("click", setRandomGradient);
