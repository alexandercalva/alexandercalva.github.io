

window.addEventListener('load', function(){
	function clicker() {
		console.log("Clicks");
		alert("Click...");
		return true;
			
	}
			var boton = document.querySelector("#boton");
			
			// Click
			boton.addEventListener('click', function(){
			
				clicker();
			});
			// Mouseover
			
			boton.addEventListener('mouseover', function(){
			
				boton.style.background = "blue"; 
			
			});
			// Mouseout
			boton.addEventListener('mouseout', function(){
			
				boton.style.background = "green"; 
			
			});
			var inp = document.querySelector("#in");
			
			// Focus
			inp.addEventListener('focus', function(){
			
				console.log("You are in the textbox");
			});
			
			// Blur
			inp.addEventListener('blur', function(){
			
				console.log("You are outside");
			});
			
			// Keydown
			inp.addEventListener('keydown', function(event){
			
				console.log("Key pulsed ", String.fromCharCode(event.keyCode));
			});
			
			// Keypress
			inp.addEventListener('keypress', function(event){
			
				console.log("Key press ", String.fromCharCode(event.keyCode));
			});
			
			// Keyup
			inp.addEventListener('keyup', function(event){
			
				console.log("Key release ", String.fromCharCode(event.keyCode));
			});
			
			// Timers
			var tempo = setInterval(function(){
			   var h = document.querySelector("h1");
			   if(h.style.backgroundColor== "yellow")
			   
			     h.style.backgroundColor = "blue";
			   
			   else 
				 h.style.backgroundColor = "yellow";  
			}, 3000);
			
			
}); // End load		