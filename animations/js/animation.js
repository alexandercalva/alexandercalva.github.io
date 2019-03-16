
function efx(val){
	
	div1bottom.classList = "";
	
	switch(val.id) {
		case "boton1":
			
			div1bottom.classList.add('useKeyframes');
			div1bottom.style.visibility = "visible";
			
			setTimeout(function() {
				div1top.classList = "";
				div1top.classList.add('useKeyframes');	
				div1top.style.visibility = "visible";

			}, 300);

			break;
		case "boton2":
			
			div1bottom.classList.add('useKeyframes2');
			div1bottom.style.visibility = "visible";
			
			setTimeout(function() {
				div1top.classList = "";
				div1top.classList.add('useKeyframes2');	
				div1top.style.visibility = "visible";

			}, 300);
			break;
		case "boton3":
		
			div1bottom.classList.add('useKeyframes3');
			div1bottom.style.visibility = "visible";
			
			setTimeout(function() {
				div1top.classList = "";
				div1top.classList.add('useKeyframes3');	
				div1top.style.visibility = "visible";

			}, 300);
			break;
		case "boton4":
			
			div1bottom.classList.add('useKeyframes4');
			div1bottom.style.visibility = "visible";
			
			setTimeout(function() {
				div1top.classList = "";
				div1top.classList.add('useKeyframes4');	
				div1top.style.visibility = "visible";

			}, 300);
			break;
	}
	
	
	
		
	var kids = el.parentElement.children;
	
	for(var i = 0; i < kids.length; i++){
		
        kids[i].className = "one";
    }
	el.className = "two";	
}

function startBallAnimation() {
	var ballArray = document.getElementsByClassName("ball");
	var ball = ballArray[0];
	ball.style.animation = "jump 10s linear infinite";
}

