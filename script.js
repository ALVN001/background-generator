var color1= document.querySelector("#color1");
var color2= document.querySelector("#color2");
var h3 = document.querySelector(".css");
var body = document.querySelector(".gradient");
// color1.value='#9ecc9e';
// color2.value='#9370db';
h3.textContent = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")" + ";";

function setgradient(){
		body.style.background = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
 		h3.textContent = body.style.background + ";";
}

color1.addEventListener("input",setgradient);

color2.addEventListener("input",setgradient);

