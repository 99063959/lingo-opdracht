var nummer= Math.floor(Math.random() * words.length) + 1;
var woord= words[nummer].toUpperCase();
var copyword= woord;
var div= ["container", "input"];
var wordlength= woord.length;
const aantal_rijen= 5;
var RowHeight= 1;
const id_row= "Row";
const class_rows= "Rows";
const ClassLetters= "Letters";
var win= false;
var pogingen =0;

spelboord();
ShowLetter(0);
function spelboord(){
    console.log(woord);
    div[0]= document.createElement("div");
    div[0].setAttribute('class', "container");
    document.body.appendChild(div[0]);

    var header= document.createElement("div");
    header.setAttribute('id', "h1");
    div[0].appendChild(header);
    header.innerHTML= "LINGO";

    div[1]= document.createElement("div");
    div[1].setAttribute('class', "WoordenInput")
    header.appendChild(div[1]);

    var label= document.createElement("label");
    label.setAttribute('type', "text");
    div[1].appendChild(label);
    label.innerHTML= "vul een woord in"

    var input= document.createElement("input");
    input.setAttribute('style', "text-transform:uppercase");
    input.setAttribute('id', "wordinput");
    div[1].appendChild(input);

    var inputBtn= document.createElement("input");
    inputBtn.setAttribute('type', "button");
    inputBtn.setAttribute('value', "Laat zien");
    inputBtn.setAttribute('id', "button");
    div[1].appendChild(inputBtn);
    inputBtn.onclick= CheckLetter;

    for(var loop=1; loop<=aantal_rijen; loop++){
        element = document.createElement("div");
        element.className = class_rows;
        element.id = id_row + loop;
        div[0].appendChild(element);

        for(var i=1; i<=wordlength; i++){
            var Wordbox= document.createElement("div");
            Wordbox.className = "WordBox";
            Wordbox.id = "letter" + i + id_row + loop;
            Wordbox.innerHTML = "-";
            element.appendChild(Wordbox);
        }
    }
    var input = document.getElementById ("wordinput");
    input.maxLength = 5;
}

function CheckLetter(){
    pogingen++
    var InputUser= document.getElementById("wordinput").value.toUpperCase();
    if(isNaN(InputUser) && InputUser.length == wordlength && win == false){
        copyword= woord;
        for(i=0; i<wordlength; i++){
            var letter2= woord.charAt(i); 
            var letter= InputUser.charAt(i);
            document.getElementById("letter" + (i+1) + "Row" + RowHeight).innerHTML= letter;

            if(letter == letter2){ 
                document.getElementById("letter" + (i+1) + "Row" + RowHeight).style.backgroundColor= "green";
                copyword = copyword.replace(letter, "");
            } 
        }
        for(var i= 0; i<wordlength; i++){ 
            var letter2= woord.charAt(i); 
            var letter= InputUser.charAt(i);

            if(copyword.includes(letter) && letter != letter2){
                document.getElementById("letter" + (i+1) + "Row" + RowHeight).style.backgroundColor= "yellow";
                document.getElementById("letter" + (i+1) + "Row" + RowHeight).style.borderRadius= "30px";
                copyword = copyword.replace(letter, "");
            }
            else if(letter != letter2){
                document.getElementById("letter" + (i+1) + "Row" + RowHeight).style.backgroundColor= "red";
            } 
        }
        RowHeight++;
        if(InputUser == woord){
            alert("U heeft het woord goed geraden!!");
            win = true;
        }   
    }
    if(pogingen==6){
        location.reload();
    }
    console.log(pogingen);
}

function ShowLetter(indexletter) {
    for (var i=1; i<(aantal_rijen + 1); i++) {
        console.log(a);
        document.getElementById("letter" + (indexletter + 1) + "Row" + i).innerHTML= woord.charAt(indexletter);  
    }
}


/*var container2 = document.getElementById("container2");
var button = document.getElementById("button");
var randomWoord;
var woordletters = [];
var inputletters = [];
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
	randomWoord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWoord);
}

function eersteLetter(){
	var blok1 = document.getElementById("woord1letter1").innerHTML = "<h1></h1>" + randomWoord[0];
}

function woordSplit(woord){
	woordletters = randomWoord.split("");
	for(var i=0;i<randomWoord.length;i++){
	inputletters = woord.split("");
    }
	letterCOPY= woordletters.slice(0,5);     
}

function woordCheck(woord){
    pogingen++
    woordSplit(woord);
    if(pogingen>=6){
        alert("verloren teveel pogingen");
    }
    if(woord==randomWoord){
        alert("goed geraden");
    }
    
    for(var i=0; i<inputletters.length; i++){
        document.getElementById("woord" + pogingen + "letter" +(i+1)).innerHTML="<h1></h1>"+ inputletters[i];

        if(inputletters.includes(woordletters[i])){
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.backgroundColor="yellow";
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.borderRadius="50%";


            woordletters[i] = "";
        }
    }

    woordSplit(woord);

    for(var i=0; i<inputletters.length; i++){
        document.getElementById("woord" + pogingen + "letter" +(i+1)).innerHTML="<h1></h1>"+ inputletters[i];

        if(inputletters[i] == woordletters[i]){
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.backgroundColor="green";
        }
        woordletters[i] = "";
    }
}

randomWoord();
eersteLetter();*/