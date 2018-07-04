 
     function run_franklin()
	 {
		 
	 var weatherRequest = new XMLHttpRequest();
       var req = "https://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=7d55d341a1dc275dc55a79e893b5e150";
       weatherRequest.open('GET', req, true);
       weatherRequest.send();
       weatherRequest.onload = function () {
           var weatherData = JSON.parse(weatherRequest.responseText);
           console.log(weatherData);
           
		   //calling
		   var currentweather = weatherData.list[0].main.temp;
           var description = weatherData.list[0].weather[0].description;
           var tempmax = weatherData.list[0].main.temp_max;
		   var tempmin = weatherData.list[0].main.temp_min;
		   var s = weatherData.list[0].wind.speed;
		   var icon = weatherData.list[0].weather[0].icon;
           var icon_path = "https://openweathermap.org/img/w/" + icon + ".png";
		   
		   // Conversion
		    var convertmain = ((currentweather - 273.15) * 1.8) + 32;
			var convertmax = ((tempmax - 273.15) * 1.8) + 32;
			var convertmin = ((tempmin - 273.15) * 1.8) + 32;
			
		   // wind chill
		    var tempProm, f;
			var tempmaxnum = parseFloat(tempmax);
			var tempminnum = parseFloat(tempmin);
			tempProm = (tempmaxnum + tempminnum)/2;
			if(tempProm <= 50) {
			   		
			    var s1 = parseFloat(s);
			    var t = parseFloat(currentweather);
			 	f = ((35.74 + 0.6215) * t) - (35.75 * s1 *0.16) + (0.4275 * t *s1 * 0.16);
				document.getElementById("output").innerHTML = f.toFixed(2) +"  &ordm;F";
			 } else {
	                var cadena = "Not";
			 	    document.getElementById("output").innerHTML = cadena;	
			   }
		   // output
		    document.getElementById("current-temp").innerHTML = convertmain.toFixed(2) +"  &ordm;F"; 
		    document.getElementById("highT").innerHTML = convertmax.toFixed(2) +"  &ordm;F"; ;
		    document.getElementById("lowT").innerHTML = convertmin.toFixed(2) +"  &ordm;F"; ;
			document.getElementById("speed").innerHTML = s.toFixed(2) +" mph";
		    document.getElementById("description").innerHTML = weatherData.list[0].weather[0].description;
            document.getElementById("icon").src = icon_path;
		    
		   
		   
	   }  
	 }
	 run_franklin();