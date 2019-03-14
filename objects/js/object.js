

window.addEventListener('load', function(){
	function Domestic() {
		// Properties 
		this.animal = " ";
		this.name = " ";
		// Methods
		this.configAnimal = function(newAnimal){
		
			this.animal = newAnimal;
		}
	    this.configName = function(newName){
		
			this.name = newName;
		}
	    this.show = function(){
		
			alert("My name is " + this.name + " and I am a " + this.animal); 
		}
	}
	 // Instance
	 var myCat = new Domestic();
	 myCat.configAnimal = "Cat";
	 var nombre = document.querySelector("#name").value;
	 myCat.configName = nombre;
	 
	 // Inheritance
	 dog.prototype = new Domestic();
	 function dog(){
		// dog properties
		this.race = " ";
		// dog method
		this.configRace = function(newRace) {
			this.race = newRace;
		}
	    // Domestic property
		this.printOut = function(){
			alert(this.name + " is my name, I am a dog and I am a domestic animal too, my race is " + this.race);
		}
		
	 }
	// Instance
	var myDog = new dog();
	myDog.configName("Rumple");
	myDog.configRace("Beagle");
	
	
	 
}); // End load		