function calculate() {
    
    var s = get("wind").value;
    var t = get("temp").value;
    var f;
    
    var snum = parseInt(s); // OK - parse string to number
    var tnum = parseInt(t); // OK - parse string to number
    
    f = ((35.74 + 0.6215) * t) - (35.75 * s *0.16) + (0.4275 * t *s * 0.16);
    // Output - output to the div and round the number value to two decimal places
    get("output").innerHTML = "The value is <strong>" + f.toFixed(2) + "</strong>";
}

function get(e) { return document.getElementById(e); }