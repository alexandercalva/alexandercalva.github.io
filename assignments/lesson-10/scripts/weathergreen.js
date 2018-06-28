var weatherRequest = new XMLHttpRequest();
       var req = "https://api.openweathermap.org/data/2.5/forecast?id=1245842&APPID=7d55d341a1dc275dc55a79e893b5e150";
       weatherRequest.open('GET', req, true);
       weatherRequest.send();
       weatherRequest.onload = function () {
           var weatherData= JSON.parse(weatherRequest.responseText);
           console.log(weatherData);
           var currentweather = weatherData.list[0].main.temp;
           var convert = ((currentweather - 273.15) * 1.8) + 32;
           document.getElementById("current-temp").innerHTML = convert.toFixed(2);
           
       }