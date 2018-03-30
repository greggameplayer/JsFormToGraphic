var submitbutton;
var username;
var firstname;
var adress;
var civility;
var phonenumber;
var exterioractivities;
var boutonactivities;
var marquelist;
var marqueselect;
var marquesmartphone;
var apps = [];
var appsindex = 0;

function onLoad()
{
	submitbutton = document.getElementById("submit");
	submitbutton.addEventListener("click", onClickSubmitButton);
	marquelist = document.getElementById("marque");
	onChangeMarquelist();
	marquelist.addEventListener("change", onChangeMarquelist);
}
window.addEventListener("load", onLoad);

function onChangeMarquelist(){
	marqueselect = marquelist.selectedIndex;
	if(marqueselect == 0){
	document.getElementById("apple").style.visibility = "hidden";	
	document.getElementById("android").style.visibility = "visible";
		
	}else if(marqueselect == 1){
	document.getElementById("android").style.visibility = "hidden";	
	document.getElementById("apple").style.visibility = "visible";
	}else if(marqueselect == 2){
	document.getElementById("apple").style.visibility = "hidden";	
	document.getElementById("android").style.visibility = "visible";		
	}else{
	document.getElementById("apple").style.visibility = "hidden";	
	document.getElementById("android").style.visibility = "visible";		
	}
	
}

function onClickSubmitButton()
{	
	username = document.getElementById("username").value;
	firstname = document.getElementById("firstname").value;
	adress = document.getElementById("adress").value;
	if(document.getElementById("monsieur").checked == true)
	{
	civility = "monsieur";	
	}else{
	civility = "madame";
	}
	phonenumber = document.getElementById("phonenumber").value;
	if(marquelist.selectedIndex == 0){
	marquesmartphone = "Samsung";	
	}else if(marquelist.selectedIndex == 1){
	marquesmartphone = "Apple";	
	}else if(marquelist.selectedIndex == 2){
	marquesmartphone = "Huawei";	
	}else{
	marquesmartphone = "Honor";	
	}
	if(document.getElementById("chrome").checked == true){
	apps[appsindex] = "Google Chrome";
	appsindex++;
	}else if(document.getElementById("firefox").checked == true){
	apps[appsindex] = "Mozzila Firefox";
	appsindex++;		
	}else if(document.getElementById("twitter").checked == true){
	apps[appsindex] = "Twitter";
	appsindex++;				
	}else if(document.getElementById("youtube").checked == true){
	apps[appsindex] = "Youtube";
	appsindex++;			
	}
}