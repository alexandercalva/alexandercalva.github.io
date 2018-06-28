
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
      
  
   var towndata = new XMLHttpRequest();
  var requrl = "https://byui-cit230.github.io/weather/data/towndata.json";
  towndata.open('GET', requrl, true);
  towndata.send();
  towndata.onload = function () {
    var obtainedata = JSON.parse(towndata.responseText);
    console.log(obtainedata);
   document.getElementById("franklinName").innerHTML = obtainedata.towns[0].name;
    document.getElementById("franklinMotto").innerHTML = obtainedata.towns[0].motto;
    document.getElementById("franklinYear").innerHTML = obtainedata.towns[0].yearFounded;
    document.getElementById("franklinPopulation").innerHTML = obtainedata.towns[0].currentPopulation;
    document.getElementById("franklinRainfall").innerHTML = obtainedata.towns[0].averageRainfall;
    document.getElementById("greenvilleName").innerHTML = obtainedata.towns[1].name;
	//document.getElementById("feventone").innerHTML = obtainedata.towns[0].events[0];
   // document.getElementById("feventtwo").innerHTML = obtainedata.towns[0].events[1];
  // document.getElementById("feventthree").innerHTML = obtainedata.towns[0].events[2];
   
    document.getElementById("greenvilleName").innerHTML = obtainedata.towns[1].name;
    document.getElementById("greenvilleMotto").innerHTML = obtainedata.towns[1].motto;
    document.getElementById("greenvilleYear").innerHTML = obtainedata.towns[1].yearFounded;
    document.getElementById("greenvillePopulation").innerHTML = obtainedata.towns[1].currentPopulation;
    document.getElementById("greenvilleRainfall").innerHTML = obtainedata.towns[1].averageRainfall;
    //document.getElementById("g-event0").innerHTML = obtainedata.towns[1].events[0];
  // document.getElementById("g-event1").innerHTML = obtainedata.towns[1].events[1];
    //document.getElementById("g-event2").innerHTML = obtainedata.towns[1].events[2];
   //document.getElementById("g-event3").innerHTML = obtainedata.towns[1].events[3];
  
    document.getElementById("springfieldName").innerHTML = obtainedata.towns[3].name;
    document.getElementById("springfieldMotto").innerHTML = obtainedata.towns[3].motto;
    document.getElementById("springfieldYear").innerHTML = obtainedata.towns[3].yearFounded;
    document.getElementById("springfieldPopulation").innerHTML = obtainedata.towns[1].currentPopulation;
    document.getElementById("springfieldRainfall").innerHTML = obtainedata.towns[3].averageRainfall;
    //document.getElementById("springfieldEvent0").innerHTML = obtainedata.towns[3].events[0];
   //document.getElementById("springfieldEvent1").innerHTML = obtainedata.towns[3].events[1];
   // document.getElementById("springfieldEvent2").innerHTML = obtainedata.towns[3].events[2];
    
 }
    
 // Date
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
//}


   

}