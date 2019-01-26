var sum;
sum = 0;
for (var i = 0; i <  5; i++)
	 {
	   sum += i;
	 }
   document.getElementById("demo").innerHTML = sum;
   
   
 while(sum > 0) 
 {
  sum --;
 }	 
  document.getElementById("demo1").innerHTML = sum;
  
  do {
	sum = sum +2;
  
  }
  while(sum < 12);
  document.getElementById("demo2").innerHTML = sum;
  
  if(sum < 12 )
  {
	  document.getElementById("demo3").innerHTML = "The condition is true";
  } else 
  {
       document.getElementById("demo3").innerHTML = "The condition is false";
  }  
	// switch statement

  var op = parseFloat(document.getElementById("number1").value);
  
  
  
  switch(op) {
	case 1:
		document.getElementById("demo4").innerHTML = "The number is " + op ;
		break;
	case 2:
		document.getElementById("demo4").innerHTML = "The number is " + op;
		break;
	case 3:
	    document.getElementById("demo4").innerHTML = "The number is " + op;
		break;
	case 4:
	    document.getElementById("demo4").innerHTML = "The number is " + op;
		break;
	default:
	    document.getElementById("demo4").innerHTML = "The number is out of range ";
		break;
    }
  
  // Functions
  
  function doInputOutput() {

var temperature = parseFloat(document.getElementById("input-tempt").value);
var wind = parseFloat(document.getElementById("input-wind").value);
var result = windChill(temperature, wind); // Send the values of temperature and wind to the function windChill()
document.getElementById("output").innerHTML = result.toFixed(2);;
}

function windChill(t, s) {  // Replace the variables t = temperature, s = wind 

var f= 35.74 + 0.6215*t -35.75*Math.pow(s,0.16) +0.4275*t*Math.pow(s,0.16);
return f; 
}

//Arrays

var person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo5").innerHTML = person["firstName"];

  