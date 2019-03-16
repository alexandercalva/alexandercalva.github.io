function sq(){
 var square = document.querySelector(".square");
 square.style.transition = "transform 1s";
 square.style.transform = "scale(2)";
 
}
function sq1(){
 var square = document.querySelector(".square");
 square.style.transition = "transform 1s";
 square.style.transform = "scale(1)";
 
}
function rota(){
 var square = document.querySelector(".droplet");
 square.style.transition.timing = "ease-in-out";
 square.style.transform = "rotate(1080deg)";
 
}

 function translate() {
 var square = document.querySelector(".square2");
  square.style.transition = "transform 0.8s";
 square.style.transform = "translate(20px, 20px)";
 }
  function drop() {
 var square = document.querySelector(".droplet1");
  square.style.transition = "transform 3s";
  square.style.transform = "rotate(500deg)";
 }