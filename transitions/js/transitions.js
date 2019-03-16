sun.onclick = function() {
	var sun = document.getElementById("sun");
	var day = document.getElementById("day");
	
	if (sun.className == "getLighter") {
		day.className = "";
		sun.className = "";
	} else {
		day.className = "getDarker";
		sun.className = "getLighter";
	}
	
}

one.onclick = function() {
	changeStoplight();
	var loop = setInterval(changeStoplight, 10000);
}



loadButton.onclick = function() {
	loader.className = "increase";
	setTimeout(function(){ 
		loadedImg.style.display = "block";
	}, 7000);
}