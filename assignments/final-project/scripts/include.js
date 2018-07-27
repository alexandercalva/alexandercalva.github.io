function include() {
  let file, xhttp; 
  let allElements = document.getElementsByTagName('*'); //get all elements on the page

  for (let i = 0; i < allElements.length; i++) { // process all the elements looking for the custom attribute 'includefile'
    file = allElements[i].getAttribute("includefile");  
    if (file) { // if the attribute is found, process an AJAX XMLHttpRequest
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) { allElements[i].innerHTML = this.responseText;}
          if (this.status == 400) { allElements[i].innerHTML = "Page not found!";}
          allElements[i].removeAttribute('includefile');
          include();
        }
	  }
		xhttp.open('GET','modules/' +file, true); // matching file names in includes folder
        xhttp.send();
        return;
      }
    }
    var urlString, urlArray, pageHREF, menu, i, currentURL; 
urlString = document.location.href; 
urlArray = urlString.split('/'); 
pageHREF = urlArray[urlArray.length - 1];
if (pageHREF !== "") { 
	menu = document.querySelectorAll('ul#primaryNav li a'); 
	for (i = 0; i < menu.length; i++) 
	{ 	currentURL = (menu[i].getAttribute('href')); 
		menu[i].parentNode.className = ''; 
		if (currentURL === pageHREF) 
		{ menu[i].parentNode.className = 'active';
		} 
	} 
 } 
  // date
  
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
    
    document.getElementById("currentdate").innerHTML = d;

  
	
	
  
  };

