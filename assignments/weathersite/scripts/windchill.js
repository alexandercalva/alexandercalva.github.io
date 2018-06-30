function calculate() {
	
	var f;
	
	
	var s1 = document.getElementById('speed').value;
	var t1 = document.getElementById('current-temp').value;
	var s = parseFloat(s1);
	var t = parseFloat(t1);
	alert(s);
	
	f = ((35.74 + 0.6215) * t) - (35.75 * s *0.16) + (0.4275 * t *s * 0.16);
	// Output - output to the div and round the number value to two decimal places
	document.getElementById("output").innerHTML = f;
}

