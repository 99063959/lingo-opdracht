var container2 = document.getElementById("container2");

for(i=1;i<=25;i++){
	var blok = document.createElement("div");
	container2.appendChild(blok);
	blok.id = "blok" + i;
	console.log(blok);
}