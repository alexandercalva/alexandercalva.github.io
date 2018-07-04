function run_springfield() {
	   var weatherRequest2 = new XMLHttpRequest();
       var req2 = "https://api.openweathermap.org/data/2.5/forecast?id=4525353&APPID=7d55d341a1dc275dc55a79e893b5e150";
       weatherRequest2.open('GET', req2, true);
       weatherRequest2.send();
       weatherRequest2.onload = function () {
           var weatherData = JSON.parse(weatherRequest2.responseText);
           console.log(weatherData);
           //calling
		   
		   var currentweather_s = weatherData.list[1].main.temp;
           var description_s = weatherData.list[1].weather[0].description;
		   var tempmax_s = weatherData.list[1].main.temp_max;
		   var tempmin_s = weatherData.list[1].main.temp_min;
		   var speed_s = weatherData.list[1].wind.speed;
		   var icon_s = weatherData.list[1].weather[0].icon;
		   var icon_path_s = "https://openweathermap.org/img/w/" + icon_s + ".png";
		   
		   //conversion
		   var convert_s = ((currentweather_s - 273.15) * 1.8) + 32;
		   var convertmax_s = ((tempmax_s - 273.15) * 1.8) + 32;
		   var convertmin_s = ((tempmin_s - 273.15) * 1.8) + 32;
		   
		   // wind chill
		    var tempProm_s, f_s;
			var tempmaxnum_s = parseFloat(tempmax_s);
			var tempminnum_s = parseFloat(tempmin_s);
			tempProm_s = (tempmaxnum_s + tempminnum_s)/2;
			if(tempProm_s <= 50) {
			   		
			    var s1 = parseFloat(speed_s);
			    var t = parseFloat(currentweather_s);
			 	f = ((35.74 + 0.6215) * t) - (35.75 * s1 *0.16) + (0.4275 * t *s1 * 0.16);
				document.getElementById("output_s").innerHTML = f.toFixed(2) +"  &ordm;F";
			}
	        else 
			{
			    var cadena = " Not";
				document.getElementById("output_s").innerHTML = cadena;	
			}
		   
		   //output
		  
		   document.getElementById("current-temp2").innerHTML = convert_s.toFixed(2) +"  &ordm;F";
		   document.getElementById("description2").innerHTML = description_s;
		   document.getElementById("highT2").innerHTML = convertmax_s.toFixed(2) +"  &ordm;F";
		   document.getElementById("lowT2").innerHTML = convertmin_s.toFixed(2) +"  &ordm;F";
	       document.getElementById("speed2").innerHTML = speed_s.toFixed(2)+" mph";
	       document.getElementById("icon2").src = icon_path_s;
		    
			   
	   }  
	  } 
	  run_springfield();