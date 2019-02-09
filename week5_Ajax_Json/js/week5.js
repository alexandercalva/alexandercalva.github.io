// Global variables
var cont_name = 0;
var cont_last_name = 0;
var cont_id = 0;
// This code is commented because is used as script within HTML file
/* 
function names() {
   if(cont_name == 0)
	{    
	var data = new XMLHttpRequest();
     var requrl = "https://reqres.in/api/users?page=2";
 
     data.open('GET', requrl, true);
     data.send();
	  data.onload = function(){
	 var dataInfo = JSON.parse(data.responseText);
	 console.log(dataInfo);
	var name = document.querySelector("#name")
	var index;
	
	for(index in dataInfo.data)
    	
	 {
		cont_name ++;
		var p = document.createElement('p');
		p.append(dataInfo.data[index].first_name);
		name.append(p);
	 }
  }
 }// end if
 
 }
 
 function lastName() {
     var data = new XMLHttpRequest();
     var requrl = "https://reqres.in/api/users?page=2";
 
     data.open('GET', requrl, true);
     data.send();
	  data.onload = function(){
	 var dataInfo = JSON.parse(data.responseText);
	 
	var lastname = document.querySelector("#lastname")
	var index;
	
	if(cont_last_name == 0) {
		for(index in dataInfo.data)
    	
		{
		    cont_last_name ++;
			var p = document.createElement('p');
			p.append(dataInfo.data[index].last_name);
			lastname.append(p);
		}
    }
 }
 }
 function ide() {
     var data = new XMLHttpRequest();
     var requrl = "https://reqres.in/api/users?page=2";
 
     data.open('GET', requrl, true);
     data.send();
	  data.onload = function(){
	 var dataInfo = JSON.parse(data.responseText);
	 
	var ide = document.querySelector("#id")
	var index;
	if(cont_id == 0)
	{
	for(index in dataInfo.data)
    	
	 {
		cont_id ++;
		var p = document.createElement('p');
		p.append(dataInfo.data[index].id);
		id.append(p);
	 }
    }
   }
 }


*/

