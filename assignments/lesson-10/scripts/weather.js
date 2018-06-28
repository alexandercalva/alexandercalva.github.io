window.onload = function program() {
  
     var weatherRequest = new XMLHttpRequest();
       var req = "https://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=7d55d341a1dc275dc55a79e893b5e150";
       weatherRequest.open('GET', req, true);
       weatherRequest.send();
       weatherRequest.onload = function () {
           var weatherData = JSON.parse(weatherRequest.responseText);
           console.log(weatherData);
           var currentweather = weatherData.list[0].main.temp;
           var convert = ((currentweather - 273.15) * 1.8) + 32;
           document.getElementById("current-temp").innerHTML = convert.toFixed(2);
		   document.getElementById("description").innerHTML = weatherData.list[0].weather[0].description;
		   document.getElementById("highT").innerHTML = weatherData.list[0].main.temp_max;
		   document.getElementById("lowT").innerHTML = weatherData.list[0].main.temp_min;
	       var s = weatherData.list[0].wind.speed;
		   document.getElementById("speed").innerHTML = s;
		   var icon = weatherData.list[0].weather[0].icon;
           var icon_path = "https://openweathermap.org/img/w/" + icon + ".png";
           document.getElementById("icon").src = icon_path;
		    
		   
		   
	   }  
      
	  // Greenville
	  
	  var weatherRequest1 = new XMLHttpRequest();
       var req1 = "https://api.openweathermap.org/data/2.5/forecast?id=2276600&APPID=7d55d341a1dc275dc55a79e893b5e150";
       weatherRequest1.open('GET', req1, true);
       weatherRequest1.send();
       weatherRequest1.onload = function () {
           var weatherData = JSON.parse(weatherRequest1.responseText);
           console.log(weatherData);
           var currentweather = weatherData.list[1].main.temp;
           var convert = ((currentweather - 273.15) * 1.8) + 32;
           document.getElementById("current-temp1").innerHTML = convert.toFixed(2);
		   document.getElementById("description1").innerHTML = weatherData.list[1].weather[0].description;
		   document.getElementById("highT1").innerHTML = weatherData.list[1].main.temp_max;
		   document.getElementById("lowT1").innerHTML = weatherData.list[1].main.temp_min;
	       var s = weatherData.list[1].wind.speed;
		   document.getElementById("speed1").innerHTML = s;
		   var icon = weatherData.list[1].weather[0].icon;
           var icon_path = "https://openweathermap.org/img/w/" + icon + ".png";
           document.getElementById("icon1").src = icon_path;
		    
			   
	   }  
  
     // Springfield 
	   var weatherRequest2 = new XMLHttpRequest();
       var req2 = "https://api.openweathermap.org/data/2.5/forecast?id=4525353&APPID=7d55d341a1dc275dc55a79e893b5e150";
       weatherRequest2.open('GET', req2, true);
       weatherRequest2.send();
       weatherRequest2.onload = function () {
           var weatherData = JSON.parse(weatherRequest2.responseText);
           console.log(weatherData);
           var currentweather = weatherData.list[1].main.temp;
           var convert = ((currentweather - 273.15) * 1.8) + 32;
           document.getElementById("current-temp2").innerHTML = convert.toFixed(2);
		   document.getElementById("description2").innerHTML = weatherData.list[1].weather[0].description;
		   document.getElementById("highT2").innerHTML = weatherData.list[1].main.temp_max;
		   document.getElementById("lowT2").innerHTML = weatherData.list[1].main.temp_min;
	       var s = weatherData.list[1].wind.speed;
		   document.getElementById("speed2").innerHTML = s;
		   var icon = weatherData.list[1].weather[0].icon;
           var icon_path = "https://openweathermap.org/img/w/" + icon + ".png";
           document.getElementById("icon2").src = icon_path;
		    
			   
	   }  
	
    var d = new Date();

    
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";



    var monthy = new Array(12);

    monthy[0] = "January";
    monthy[1] = "February";
    monthy[2] = "March";
    monthy[3] = "April";
    monthy[4] = "May";
    monthy[5] = "June";
    monthy[6] = "July";
    monthy[7] = "August";
    monthy[8] = "September";
    monthy[9] = "October";
    monthy[10] = "November";
    monthy[11] = "December";

    
    var d = weekday[d.getDay()] + ", " + d.getDate() + " " + monthy[d.getMonth()] + " " + d.getFullYear();
    //We displayon screen in the id  = "currentdate"
    document.getElementById("currentdate").innerHTML = d;

  

  
  }