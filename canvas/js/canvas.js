

window.addEventListener('load', function(){
	var dib = document.querySelector("#draw");
	draw = dib.getContext("2d");
	function rectFill(){
		draw.fillStyle="#387780";
		draw.fillRect(200,200,100,100);
	}
	function rectStroke(){
		draw.strokeRect(100,100,100,100);
		draw.strokeRect(100,300,100,100);
		draw.strokeRect(300,100,100,100);
		draw.strokeRect(300,300,100,100);
	}
	function clearRect(){
		draw.clearRect(225,225,50,50);
	}
	 
}); // End load		