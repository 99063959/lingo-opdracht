//import {words} from "lingo-nl.js";
var container2 = document.getElementById("container2");
var randomWoord;
var letterInput = [];
var letterRandom = [];

for(i=1;i<=25;i++){
	var blok = document.createElement("div");
	container2.appendChild(blok);
	blok.id = "blok" + i;
}

function randomWoord(){
	randomWoord = words[Math.floor(Math.random() * words.length)];
	console.log(randomWoord);
}

function eersteLetter(){
	var blok1 = document.getElementById("blok1");
	blok1.innerHTML = "<h1></h1>" + randomWoord[0];
}

