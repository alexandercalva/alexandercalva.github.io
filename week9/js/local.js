

window.addEventListener('load', function(){
	// Test in LocalStorage
	/*
	if(typeof(Storage) != "undefined")
	
		console.log("LocalStorage is available");
	
	else
	
		console.log("LocalStorage is unvailable");
	
*/
	var text = document.querySelector("#in").value;
	
	localStorage.setItem("Text",text); // Set data in LocalStorage
	
	boton.addEventListener('click', function() {
		simple();
	
	});
	function simple()
	{
		
		console.log(localStorage.getItem("Text")); // Get data in LocalStorage
		document.querySelector("#text").innerHTML = localStorage.getItem("Text");
	}
	
	var formT = document.querySelector("#formovies");
	formT.addEventListener('submit', function(){
		var title = document.querySelector("#addmovie").value;
		if(title.length >= 1)
		   localStorage.setItem(title, title);
	
	});
	var ul = document.querySelector("#list-movies");
	for(var i in localStorage)
	{
		if(typeof localStorage[i] == 'string')
		{
			var li = document.createElement("li");
			li.append(localStorage[i]);
			ul.append(li);
		}
		
	}
	
	var users = {
	  name: "Alexander",
	  lastname: "Calva",
	  email: "alexandre@byui.edu",
	  web: "www.librosen.com"
	
	}
	
	localStorage.setItem("user", JSON.stringify(users));
	var userPrint = JSON.parse(localStorage.getItem("user"));
	console.log(userPrint);
	document.querySelector("#text").append(userPrint.name);
	
	var del = document.querySelector("#delete1");
    del.addEventListener('click', function(){
		deleteF();
	});		
	 function deleteF()
	 {
	    localStorage.clear();  
	 }
	 
}); // End load		