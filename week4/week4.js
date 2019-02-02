var vehicles = {
  Cars: "SUV",
  Motos: "GTX",
  Bykes: "GEAR",
  Trucks: "JAC"
}; 
 
  
  
  
 
  console.log(vehicles);
  var json = JSON.stringify(vehicles);
   console.log(json);
   document.getElementById("demo").innerHTML = vehicles[1];
  