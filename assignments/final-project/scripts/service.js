function program_main() {
  
   
  
   var towndata = new XMLHttpRequest();
  var requrl = "data/information.json";
  towndata.open('GET', requrl, true);
  towndata.send();
  towndata.onload = function () {
    var obtainedata = JSON.parse(towndata.responseText);
    console.log(obtainedata);
   document.getElementById("f1").innerHTML = obtainedata.forks[0];
   document.getElementById("f2").innerHTML = obtainedata.forks[1];
   document.getElementById("f3").innerHTML = obtainedata.forks[2];
   document.getElementById("f4").innerHTML = obtainedata.forks[3];
   document.getElementById("f5").innerHTML = obtainedata.forks[4];
   document.getElementById("f6").innerHTML = obtainedata.forks[5];
   document.getElementById("s1").innerHTML = obtainedata.sales[0];
   document.getElementById("s2").innerHTML = obtainedata.sales[1];
   document.getElementById("s3").innerHTML = obtainedata.sales[2];
   document.getElementById("s4").innerHTML = obtainedata.sales[3];
   document.getElementById("s5").innerHTML = obtainedata.sales[4];
   document.getElementById("s6").innerHTML = obtainedata.sales[5];
   }
   }
   program_main();