var injuries = ["Knee Dislocation"];
// for more permanent do localStorage
if (sessionStorage.injuries) {
    injuries = JSON.parse(sessionStorage.getItem("injuries"));
} else {
    sessionStorage.setItem("injuries", JSON.stringify(injuries));
}

var INJURY_DESCRIPTOR = "<strong>Area(s) of injury:</strong>"

function setUpProfileInjuries(){
	var injuryString = INJURY_DESCRIPTOR + "<br>";
	for (i = 0; i < injuries.length; i++){
		injuryString += injuries[i] + "<br>"
	}
	document.getElementById("injuryarea").innerHTML = injuryString;
}

function viewMessages(){
	var messageString = "";
	var messages = [];
	if (sessionStorage.messages){
		messages = JSON.parse(sessionStorage.getItem("messages"));
	};
	var dates = [];
	if (sessionStorage.dates){
		dates = JSON.parse(sessionStorage.getItem("dates"));
	};
	if(dates.length > 0){
		for (i = 0; i < dates.length; i++){
			messageString += "<strong>" + dates[i] + "</strong>: &ensp;" + messages[i] + "<br>";
		}
	}
	document.getElementById("messages").innerHTML = messageString;

}