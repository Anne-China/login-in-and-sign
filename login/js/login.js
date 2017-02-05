
function can_login() {
  	document.querySelector('.cotn_form').className = "cotn_form cotn_form_active_login";  
	document.querySelector('.cotn_form_login').style.display = "block";
	document.querySelector('.cotn_form_sign').style.opacity = "0";               

	setTimeout(function(){  
		document.querySelector('.cotn_form_login').style.opacity = "1"; 
	},400);
  
	setTimeout(function(){    
		document.querySelector('.cotn_form_sign').style.display = "none";
	},200);  
}

function can_sign(at) {
  	document.querySelector('.cotn_form').className = "cotn_form cotn_form_active_sign_up";
  	document.querySelector('.cotn_form_sign').style.display = "block";
  	document.querySelector('.cotn_form_login').style.opacity = "0";
  
	setTimeout(function(){  
		document.querySelector('.cotn_form_sign').style.opacity = "1";
	},100);  

	setTimeout(function(){   
		document.querySelector('.cotn_form_login').style.display = "none";
	},400);  
}    

function ocu_login_sign_up() {

	document.querySelector('.cotn_form').className = "cotn_form";  
	document.querySelector('.cotn_form_sign').style.opacity = "0";               
	document.querySelector('.cotn_form_login').style.opacity = "0"; 

	setTimeout(function(){
		document.querySelector('.cotn_form_sign').style.display = "none";
		document.querySelector('.cotn_form_login').style.display = "none";
	},500);  
}