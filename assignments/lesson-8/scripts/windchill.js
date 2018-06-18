function calculate() {
	
	
	var f;
	
	var s = 25; // OK - parse string to number
	var t = 7; // OK - parse string to number
	
	f = ((35.74 + 0.6215) * t) - (35.75 * s *0.16) + (0.4275 * t *s * 0.16);
	// Output - output to the div and round the number value to two decimal places
	get("output").innerHTML = "The value is <strong>" + f.toFixed(2) + "</strong>";
}

function get(e) { return document.getElementById(e); }