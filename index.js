var submitbutton, username, firstname, adress, civility, phonenumber, exterioractivities, boutonactivities, marquelist, marqueselect, marquesmartphone, apps = [], appsindex = 0, compteur = 0, male, female, tab = [], monsieurcounter = 0, madamecounter = 0,
chromecounter = 0, firefoxcounter = 0, twittercounter = 0, youtubecounter = 0, clashofclanscounter = 0, safaricounter = 0, snapchatcounter = 0, instagramcounter = 0, facebookcounter = 0, clashroyalecounter = 0;
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
	monsieurcounter++;
	}else{
	civility = "madame";
	madamecounter++;
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
	chromecounter++;
	appsindex++;
	}
	if(document.getElementById("firefox").checked == true){
	apps[appsindex] = "Mozzila Firefox";
	firefoxcounter++;
	appsindex++;		
	}
	if(document.getElementById("twitter").checked == true){
	apps[appsindex] = "Twitter";
	twittercounter++;
	appsindex++;				
	}
	if(document.getElementById("youtube").checked == true){
	apps[appsindex] = "Youtube";
	youtubecounter++;
	appsindex++;			
	}
	if(document.getElementById("clashofclans").checked == true){
	apps[appsindex] = "Clash Of Clans";	
	clashofclanscounter++;
	appsindex++;	
	}
	if(document.getElementById("safari").checked == true){
	apps[appsindex] = "Safari";	
	safaricounter++;
	appsindex++;				
	}
	if(document.getElementById("snapchat").checked == true){
	apps[appsindex] = "Snapchat";
	snapchatcounter++;	
	appsindex++;				
	}
	if(document.getElementById("instagram").checked == true){
	apps[appsindex] = "Instagram";
	instagramcounter++;
	appsindex++;				
	}
	if(document.getElementById("facebook").checked == true){
	apps[appsindex] = "Facebook";	
	facebook++;
	appsindex++;				
	}
	if(document.getElementById("clashroyale").checked == true){
	apps[appsindex] = "Clash Royale";	
	clashroyalecounter++;
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
            y: (chromecounter/appsindex)*100,
            sliced: true,
            selected: true
        }, {
            name: 'Mozzila Firefox',
            y: (firefoxcounter/appsindex)*100
        }, {
            name: 'Twitter',
            y: (twittercounter/appsindex)*100
        }, {
            name: 'Youtube',
            y: (youtubecounter/appsindex)*100
        }, {
            name: 'Clash of Clans',
            y: (clashofclanscounter/appsindex)*100
        }, {
            name: 'Safari',
            y: (safaricounter/appsindex)*100
        }, {
            name: 'Snapchat',
            y: (snapchatcounter/appsindex)*100
        }, {
            name: 'Instagram',
            y: (instagramcounter/appsindex)*100
        }, {
            name: 'Facebook',
            y: (facebookcounter/appsindex)*100
        }, {
			name: 'Clash Royale',
			y: (clashroyalecounter/appsindex)*100
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
	male = (monsieurcounter/compteur)*100;
	female = 100 - male;			
	}else{
	female = (madamecounter/compteur)*100;
	male = 100 - female;	
	}
}
