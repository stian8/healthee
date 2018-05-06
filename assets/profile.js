var username = "ia123";
var email = "ia123@gmail.com";
var injuries = ["Knee Dislocation"];
var ptname = "Physical Therapist";
var ptemail = "pt@gmail.com";
// for more permanent do localStorage
// only JSON parse because lists
if (sessionStorage.injuries) {
    injuries = JSON.parse(sessionStorage.getItem("injuries"));
} else {
    sessionStorage.setItem("injuries", JSON.stringify(injuries));
}

if (sessionStorage.username){
	username = sessionStorage.getItem("username");
}
else{
	sessionStorage.setItem("username", username);
}
if (sessionStorage.email) {
	email = sessionStorage.getItem("email");
}
else{
	sessionStorage.setItem("email", email);
}
if (sessionStorage.ptname){
	ptname = sessionStorage.getItem("ptname");
}
else{
	sessionStorage.setItem("ptname", ptname);
}
if (sessionStorage.ptemail) {
	ptemail = sessionStorage.getItem("ptemail");
}
else{
	sessionStorage.setItem("ptemail", ptemail);
}

var INJURY_DESCRIPTOR = "<strong>Area(s) of injury:</strong>"

function setUpProfileInjuries(){
	var injuryString = INJURY_DESCRIPTOR + "<br>";
	for (i = 0; i < injuries.length; i++){
		injuryString += injuries[i] + "<br>"
	}
	document.getElementById("injuryarea").innerHTML = injuryString;
}

function setUpInfo(){
	document.getElementById("username").innerHTML = '<strong>Username: </strong> ' + username +'&ensp; <i id="edit-note" class="fa fa-pencil" onclick="openNameModal()"></i>';
	document.getElementById("email").innerHTML = '<strong>Email:</strong> ' + email + ' &ensp; <i id="edit-note" class="fa fa-pencil" onclick="openEmailModal()"></i>';
	document.getElementById("ptname").innerHTML = '<strong>Name: </strong> ' + ptname;
	document.getElementById("ptemail").innerHTML = '<strong>Email:</strong> ' + ptemail + '&ensp; <a id="pt-email"><i class="fa fa-envelope"></i></a>';
}

function viewMessages(){
	var messageString = "";
	var dateString = "";
	var messages = [];
	var dates = [];
	if (sessionStorage.messages){
		messages = JSON.parse(sessionStorage.getItem("messages"));
	};
	if (sessionStorage.dates){
		dates = JSON.parse(sessionStorage.getItem("dates"));
	};
	if(dates.length > 0){
		for (i = 0; i < dates.length; i++){
			dateString += "<p><strong>" + dates[i] + "</strong></p>";
			messageString += "<p>"+ messages[i] + "</p>";
		}
	}
	document.getElementById("dates").innerHTML = dateString;
	document.getElementById("messages").innerHTML = messageString;
	document.getElementById('messageModal').style.display = "block";

}

function openEmailModal(){
    document.getElementById('emailModal').style.display = "block";
}

function openNameModal(){
    document.getElementById('nameModal').style.display = "block";
}

function openSwitchModal(){
    document.getElementById('switchModal').style.display = "block";
}

function changeUsername(){
	username = document.getElementById('newUsername').value;
	sessionStorage.setItem("username", username);
	document.getElementById("username").innerHTML = '<strong>Username: </strong> ' + username +'&ensp; <i id="edit-note" class="fa fa-pencil" onclick="openNameModal()"></i>';
	document.getElementById('newUsername').value = "";
	document.getElementById('nameModal').style.display = "none";
}

function changeEmail(){
	email = document.getElementById('newEmail').value;
	sessionStorage.setItem("email", email);
	document.getElementById("email").innerHTML = '<strong>Email:</strong> ' + email + ' &ensp; <i id="edit-note" class="fa fa-pencil" onclick="openEmailModal()"></i>';
	document.getElementById('newEmail').value = "";
	document.getElementById('emailModal').style.display = "none";
}

function changePTInfo(){
	ptname = document.getElementById('newPTName').value;
	sessionStorage.setItem("ptname", ptname);
	document.getElementById("ptname").innerHTML = '<strong>Name: </strong> ' + ptname;
	document.getElementById('newPTName').value = "";
	ptemail = document.getElementById('newPTEmail').value;
	sessionStorage.setItem("ptemail", ptemail);
	document.getElementById("ptemail").innerHTML = '<strong>Email:</strong> ' + ptemail + '&ensp; <a id="pt-email"><i class="fa fa-envelope"></i></a>';
	document.getElementById('newPTEmail').value = "";
	document.getElementById('switchModal').style.display = "none";
	addEmailLink();
}

function createGraph(){
	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawBackgroundColor);

	function drawBackgroundColor() {
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Days');
      data.addColumn('number', 'Exercises Completed');
      var today = new Date();
	  var day = today.getDate();

      //        [0, 3],   [1, 5],  [2, 3],  [3, 2],  [4, 0],  [5, 4],
        //[6, 4],  [7, 4],  [8, 4],  [9, 4],  [10, 4], [11, 3],
        //[12, 3], [13, 4], [14, 4], [15, 4], [16, 4],
      var d1 = new Date();
      d1.setDate(day - 1);
      var d2 = new Date();
      d2.setDate(day - 2);
      var d3 = new Date();
      d3.setDate(day - 3);
      var d4 = new Date();
      d4.setDate(day - 4);
      var d5 = new Date();
      d5.setDate(day - 5);
      var d6 = new Date();
      d6.setDate(day - 6);
      var d7 = new Date();
      d7.setDate(day - 7);
      var d8 = new Date();
      d8.setDate(day - 8);
      var d9 = new Date();
      d9.setDate(day - 9);
      var d10 = new Date();
      d10.setDate(day - 10);



      data.addRows([
      	[d10, 0], [d9, 0], [d8, 4], [d7, 4], [d6, 4],
        [d5, 5], [d4, 5], [d3, 4], 
        [d2, 5], [d1, 5], [new Date(), 5]
      ]);

      var options = {
        hAxis: {
          title: 'Days',
          minValue: d10,
   	 	  maxValue: new Date(),
          format:'d-MMM'
        },
        vAxis: {
          title: 'Exercises Completed',
          ticks: [0, 2, 4, 6],
        },
        backgroundColor: '#ffffff',
        legend: 'none',
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
}

function addEmailLink(){
	var emailIcon = document.getElementById('pt-email');
	emailIcon.href = "mailto:" + ptemail + '?subject=' +'healthee - Patient Question'+ '&body=' +'Fill me in with a question';
}

function setUpModal(){
  var eModal = document.getElementById('emailModal');
  var nModal = document.getElementById('nameModal');
  var sModal = document.getElementById('switchModal');
  var mModal = document.getElementById('messageModal');
  var span = document.getElementsByClassName("close")[0]; 

  // When the user clicks on <span> (x), close the modal
  document.getElementById("eclose").onclick = function() {
  	  document.getElementById('newEmail').value = "";
      eModal.style.display = "none";
  }
  document.getElementById("nclose").onclick = function() {
  	  document.getElementById('newUsername').value = "";
      nModal.style.display = "none";
  }
  document.getElementById("sclose").onclick = function() {
  	  document.getElementById('newPTName').value = "";
      document.getElementById('newPTEmail').value = "";
      sModal.style.display = "none";
  }
  document.getElementById("mclose").onclick = function() {
      mModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == eModal) {
    	document.getElementById('newEmail').value = "";
        eModal.style.display = "none";
    }
    if (event.target == nModal) {
    	document.getElementById('newUsername').value = "";
        nModal.style.display = "none";
    }
    if (event.target == sModal) {
    	document.getElementById('newPTName').value = "";
    	document.getElementById('newPTEmail').value = "";
        sModal.style.display = "none";
    }
    if (event.target == mModal) {
        mModal.style.display = "none";
    }
  }
}