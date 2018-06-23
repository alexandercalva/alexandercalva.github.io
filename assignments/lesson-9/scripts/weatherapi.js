window.onload = function program() {
       var weatherRequest = new XMLHttpRequest();
       var requrl = "https://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=7d55d341a1dc275dc55a79e893b5e150";
       weatherRequest.open('GET', requrl, true);
       weatherRequest.send();
       weatherRequest.onload = function () {
           var weatherData = JSON.parse(weatherRequest.responseText);
           console.log(weatherData);
           var currentw = weatherData.list[0].main.temp;
           var converty = ((currentw - 273.15) * 1.8) + 32;
           document.getElementById("current-temp").innerHTML = converty.toFixed(2);

       }
   }