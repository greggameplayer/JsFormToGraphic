var submitbutton, username, firstname, adress, civility, phonenumber, marquelist, marqueselect, marquesmartphone, appsindex = 0, compteur = 0, male, female, tab = [], tabcounter = [0,0,0,0,0,0,0,0,0,0,0,0];
function onLoad()
{
	submitbutton = document.getElementById("submit");
	submitbutton.addEventListener("click", onClickSubmitButton);
	marquelist = document.getElementById("marque");
	onChangeMarquelist();
	marquelist.addEventListener("change", onChangeMarquelist);
	for(var i=0;i<5;i++){
	randomProfileGeneration();		
	}
}
window.addEventListener("load", onLoad);

function randomProfileGeneration(){
	var apps = [];
	tabcounter[12] = Math.floor((Math.random()*2)+1);
	tabcounter[13] = Math.floor((Math.random()*2)+1);
	if(tabcounter[12] == 1){
		civility = "monsieur";
		tabcounter[0]++;
	}else if(tabcounter[12] == 2){
		civility = "madame";
		tabcounter[1]++;
	}	
	if(tabcounter[13] == 1){
		marquesmartphone = "Samsung";	
		tabcounter[14] = Math.floor((Math.random()*5)+1);
		if(tabcounter[14] == 1){
			apps[0] = "Google Chrome";
			tabcounter[2]++;
		}else if(tabcounter[14] == 2){
			apps[0] = "Mozzila Firefox";
			tabcounter[3]++;		
		}else if(tabcounter[14] == 3){
			apps[0] = "Twitter";
			tabcounter[4]++;		
		}else if(tabcounter[14] == 4){
			apps[0] = "Youtube";
			tabcounter[5]++;		
		}else if(tabcounter[14] == 5){
			apps[0] = "Clash Of Clans";
			tabcounter[6]++;		
		}
	}else if(tabcounter[13] == 2){
		marquesmartphone = "Apple";	
		tabcounter[14] = Math.floor((Math.random()*5)+1);
		if(tabcounter[14] == 1){
			apps[0] = "Safari";
			tabcounter[7]++;
		}else if(tabcounter[14] == 2){
			apps[0] = "Snapchat";
			tabcounter[8]++;		
		}else if(tabcounter[14] == 3){
			apps[0] = "Instagram";
			tabcounter[9]++;		
		}else if(tabcounter[14] == 4){
			apps[0] = "Facebook";
			tabcounter[10]++;		
		}else if(tabcounter[14] == 5){
			apps[0] = "Clash Royale";
			tabcounter[11]++;		
		}	
	}
	Stock(compteur,"x","x","x",civility,"03",marquesmartphone,apps); // Profil généré aléatoirement
}

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
	var appid = [document.getElementById("chrome"), document.getElementById("firefox"), document.getElementById("twitter"), document.getElementById("youtube"), document.getElementById("clashofclans"), document.getElementById("safari")
, document.getElementById("snapchat"), document.getElementById("instagram"), document.getElementById("facebook"), document.getElementById("clashroyale")];
	var apps = [];
	username = document.getElementById("username").value;
	if(username == "" || username == null){
		window.alert("Vous n'avez pas entrer de nom d'utilisateur !");
		return false;
	}
	firstname = document.getElementById("firstname").value;
	if(firstname == "" || firstname == null){
		window.alert("Vous n'avez pas entrer de Prénom !");
		return false;
		
	}
	adress = document.getElementById("adress").value;
	if(adress == "" || adress == null){
		window.alert("Vous n'avez pas entrer d'adresse !");
		return false;
	}
	if(document.getElementById("monsieur").checked == false && document.getElementById("madame").checked == false){
		window.alert("Vous n'avez pas sélectionner de sexe !");
		return false;
	}
	if(document.getElementById("monsieur").checked == true){
		civility = "monsieur";
		tabcounter[0]++;
	}else{
		civility = "madame";
		tabcounter[1]++;
	}
	phonenumber = document.getElementById("phonenumber").value;
	phonenumber = phonenumber.replace(/\s+/g, '');
	if(isNaN(phonenumber) || phonenumber.length != 10){
		window.alert("le numéro de téléphone entrer n'est pas valide !");
		return false;
	}	
	if(marquelist.selectedIndex == 0){
		marquesmartphone = "Samsung";	
	}else if(marquelist.selectedIndex == 1){
		marquesmartphone = "Apple";	
	}else if(marquelist.selectedIndex == 2){
		marquesmartphone = "Huawei";	
	}else{
		marquesmartphone = "Honor";	
	}
	appsindex = 0;
	if(appid[0].checked == false && appid[1].checked == false && appid[2].checked == false && appid[3].checked == false && appid[4].checked == false &&
	appid[5].checked == false && appid[6].checked == false && appid[7].checked == false && appid[8].checked == false && appid[9].checked == false){
		window.alert("Vous n'avez choisi aucune application !");
		return false;
	}
	if(appid[0].checked == true){
		apps[appsindex] = "Google Chrome";
		tabcounter[2]++;
		appsindex++;
	}
	if(appid[1].checked == true){
		apps[appsindex] = "Mozzila Firefox";
		tabcounter[3]++;
		appsindex++;		
	}
	if(appid[2].checked == true){
		apps[appsindex] = "Twitter";
		tabcounter[4]++;
		appsindex++;				
	}
	if(appid[3].checked == true){
		apps[appsindex] = "Youtube";
		tabcounter[5]++;
		appsindex++;			
	}
	if(appid[4].checked == true){
		apps[appsindex] = "Clash Of Clans";	
		tabcounter[6]++;
		appsindex++;	
	}
	if(appid[5].checked == true){
		apps[appsindex] = "Safari";	
		tabcounter[7]++;
		appsindex++;				
	}
	if(appid[6].checked == true){
		apps[appsindex] = "Snapchat";
		tabcounter[8]++;	
		appsindex++;				
	}
	if(appid[7].checked == true){
		apps[appsindex] = "Instagram";
		tabcounter[9]++;
		appsindex++;				
	}
	if(appid[8].checked == true){
		apps[appsindex] = "Facebook";	
		tabcounter[10]++;
		appsindex++;				
	}
	if(appid[9].checked == true){
		apps[appsindex] = "Clash Royale";	
		tabcounter[11]++;
		appsindex++;				
	}
	
	Stock(compteur,username,firstname,adress,civility,phonenumber,marquesmartphone,apps);
	var graph = Highcharts.chart("graph",  {
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Graphique des applications les plus choisi'
		},
		tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
	series: [{
        name: 'Choix',
        colorByPoint: true,
        data: [{
            name: 'Google Chrome',
            y: (tabcounter[2]/appsindex)*100,
            sliced: true,
            selected: true
        }, {
            name: 'Mozzila Firefox',
            y: (tabcounter[3]/appsindex)*100
        }, {
            name: 'Twitter',
            y: (tabcounter[4]/appsindex)*100
        }, {
            name: 'Youtube',
            y: (tabcounter[5]/appsindex)*100
        }, {
            name: 'Clash of Clans',
            y: (tabcounter[6]/appsindex)*100
        }, {
            name: 'Safari',
            y: (tabcounter[7]/appsindex)*100
        }, {
            name: 'Snapchat',
            y: (tabcounter[8]/appsindex)*100
        }, {
            name: 'Instagram',
            y: (tabcounter[9]/appsindex)*100
        }, {
            name: 'Facebook',
            y: (tabcounter[10]/appsindex)*100
        }, {
			name: 'Clash Royale',
			y: (tabcounter[11]/appsindex)*100
		}]
    }]	
});
	
	var graphsexe = Highcharts.chart("graphsexe",  {
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Graphique du genre des utilisateurs'
		},
		tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
	series: [{
        name: 'Sexe',
        colorByPoint: true,
        data: [{
            name: 'Homme',
            y: male,
            sliced: true,
            selected: true
        }, {
            name: 'Femme',
            y: female
		}]
    }]	
});
	
}

function Stock(counter,usern,firstnam,adres,civilit,phonen,marquep,app){
	tab[compteur] = {};
	tab[compteur].pseudo = usern;
	tab[compteur].prenom = firstnam;
	tab[compteur].adresse = adres;
	tab[compteur].civilite = civilit;
	tab[compteur].numerodetel = phonen;
	tab[compteur].marquetel = marquep;
	tab[compteur].mobileapp = app;
	compteur++;	
	if(civility == "monsieur"){
		male = (tabcounter[0]/compteur)*100;
		female = 100 - male;			
	}else{
		female = (tabcounter[1]/compteur)*100;
		male = 100 - female;	
	}
}
