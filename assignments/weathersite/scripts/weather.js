function run_greenville() {
   
	  // Greenville
	  
	  var weatherRequest1 = new XMLHttpRequest();
       var req1 = "https://api.openweathermap.org/data/2.5/forecast?id=2276600&APPID=7d55d341a1dc275dc55a79e893b5e150";
       weatherRequest1.open('GET', req1, true);
       weatherRequest1.send();
       weatherRequest1.onload = function () {
           var weatherData = JSON.parse(weatherRequest1.responseText);
           console.log(weatherData);
           // calling
		  
		   var currentweather_g = weatherData.list[1].main.temp;
           var description_g = weatherData.list[1].weather[0].description;           
		   var tempmax_g = weatherData.list[1].main.temp_max;
		   var tempmin_g = weatherData.list[1].main.temp_min;
		   var speed_g = weatherData.list[1].wind.speed;
		   var icon_g = weatherData.list[1].weather[0].icon;
		   var icon_path_g = "https://openweathermap.org/img/w/" + icon_g + ".png";
		   
		   //conversion
		   
		   var convertg = ((currentweather_g - 273.15) * 1.8) + 32;
           var convertmax_g = ((tempmax_g - 273.15) * 1.8) + 32;
		   var convertmin_g = ((tempmin_g - 273.15) * 1.8) + 32;
		   
		   // wind chill
		    var tempProm_g, f_g;
			var tempmaxnum_g = parseFloat(tempmax_g);
			var tempminnum_g = parseFloat(tempmin_g);
			tempProm_g = (tempmaxnum_g + tempminnum_g)/2;
			if(tempProm_g <= 50) {
			   		
			    var s1 = parseFloat(speed_g);
			    var t = parseFloat(currentweather_g);
			 	f = ((35.74 + 0.6215) * t) - (35.75 * s1 *0.16) + (0.4275 * t *s1 * 0.16);
				document.getElementById("output_g").innerHTML = f.toFixed(2) +"  &ordm;F";
			}
	        else 
			{
			    var cadena = " Not";
				document.getElementById("output_g").innerHTML = cadena;	
			}
		   //output
		   
		   document.getElementById("current-temp1").innerHTML = convertg.toFixed(2) +"  &ordm;F";
		   document.getElementById("description1").innerHTML = description_g;
		   document.getElementById("highT1").innerHTML = convertmax_g.toFixed(2) +"  &ordm;F";
		   document.getElementById("lowT1").innerHTML = convertmin_g.toFixed(2) +"  &ordm;F";
	       document.getElementById("speed1").innerHTML = speed_g.toFixed(2) +" mph";
		   document.getElementById("icon1").src = icon_path_g;
		    
			   
	   }  
      
      
  }
  run_greenville();
