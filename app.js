function roar(){
    alert("RAAAWRRRRR!!");
    location.reload();
}

var gamehold = document.getElementById('gameholder').childNodes;
var random = Math.floor(Math.random() * (9 - 1) + 1);
var newElements = [];
for (var i = 0; i < gamehold.length; i++){
	if (gamehold[i].tagName == "DIV") {
		newElements.push(gamehold[i]);
	}
}
var i;
for (i = 0; i < newElements.length; i++) {
	if (newElements[i].tagName == "DIV") {
		if (newElements[i].id != "title") {
			newElements[i].id = "penguin" + i;
			newElements[8].id = "penguin"+random;
			newElements[random].id = "yeti";
			newElements[random].setAttribute("onclick", "roar()");
		}
	}
}