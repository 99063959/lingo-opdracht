var container2 = document.getElementById("container2");
var button = document.getElementById("button");
var randomWoord;
var woordletters =[];
var inputletters =[];
var letterCOPY = [];
var pogingen = 0;

for(var j=1;j<=5;j++){
	for(var i=1;i<=5;i++){
		var blok = document.createElement("div");
		container2.appendChild(blok);
		blok.id = "woord" + j + "letter" + i;
	}
}

function randomWoord(){
	//randomWoord = words[Math.floor(Math.random() * words.length)];
	randomWoord = "kaars";
    console.log(randomWoord);
}

function eersteLetter(){
	var blok1 = document.getElementById("woord1letter1").innerHTML = "<h1></h1>" + randomWoord[0];
}

function woordSplit(woord){
	woordletters = randomWoord.split("");
	for(var i=0;i<randomWoord.length;i++)
	inputletters = woord.split("");

	for(var i=0;i<woord.length;i++){
		console.log(inputletters[i]);
	}
	letterCOPY= woordletters.slice(0,5);     
	console.log(letterCOPY);
}

function woordCheck(woord){
    pogingen++
    woordSplit(woord);
    if(pogingen>=5){
        alert("verloren teveel pogingen");
        location.reload();
    }
    if(woord==randomWoord){
        alert("goed geraden");
        location.reload();
    }
    
    for(var i=0; i<inputletters.length; i++){
        document.getElementById("woord" + pogingen + "letter" +(i+1)).innerHTML="<h1></h1>"+ inputletters[i];

        if(inputletters.includes(woordletters[i])){
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.backgroundColor="yellow";
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.borderRadius="50%";
            //inputletters[i] = "";
            console.log(woordletters[i] + "geel");
            woordletters[i] = "";
        }
        console.log(inputletters[i] + "geel buiten iffie");
    }

    woordSplit(woord);

    for(var i=0; i<inputletters.length; i++){
        document.getElementById("woord" + pogingen + "letter" +(i+1)).innerHTML="<h1></h1>"+ inputletters[i];

        if(inputletters[i] == woordletters[i]){
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.backgroundColor="green";
            console.log(woordletters[i]);
            console.log(woordletters[i] + "groen");
        }
        console.log(woordletters[i] + "groen buiten iffie");
        woordletters[i] = "";
    }
}

randomWoord();
eersteLetter();