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

var INJURY_DESCRIPTOR = '<strong>Area of injury &ensp; </strong> <i id="add-injury" class="fa fa-plus-circle" onclick="openInjuryModal()"> </i>'

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
    document.getElementById("newEmail").focus();
}

function openNameModal(){
    document.getElementById('nameModal').style.display = "block";
    document.getElementById("newUsername").focus();
}

function openSwitchModal(){
    document.getElementById('switchModal').style.display = "block";
    document.getElementById("newPTName").focus();
}

function openInjuryModal(){
	document.getElementById('injuryModal').style.display = "block";
    document.getElementById("newInjury").focus();
}

function addInjury(){
    var newInjury = document.getElementById("newInjury").value;
    if(newInjury != ""){
      injuries.push(newInjury);
      sessionStorage.setItem("injuries", JSON.stringify(injuries));
    }
    document.getElementById('newInjury').value = "";
    document.getElementById('injuryModal').style.display = "none";
    setUpProfileInjuries();
}

function changeUsername(){
	if (document.getElementById('newUsername').value != ""){
		username = document.getElementById('newUsername').value;
	}
	sessionStorage.setItem("username", username);
	document.getElementById("username").innerHTML = '<strong>Username: </strong> ' + username +'&ensp; <i id="edit-note" class="fa fa-pencil" onclick="openNameModal()"></i>';
	document.getElementById('newUsername').value = "";
	document.getElementById('nameModal').style.display = "none";
}

function changeEmail(){
	if (document.getElementById('newEmail').value != ""){
		email = document.getElementById('newEmail').value;
	}
	sessionStorage.setItem("email", email);
	document.getElementById("email").innerHTML = '<strong>Email:</strong> ' + email + ' &ensp; <i id="edit-note" class="fa fa-pencil" onclick="openEmailModal()"></i>';
	document.getElementById('newEmail').value = "";
	document.getElementById('emailModal').style.display = "none";
}

function changePTInfo(){
	if (document.getElementById('newPTName').value != ""){
		ptname = document.getElementById('newPTName').value;
	}
	sessionStorage.setItem("ptname", ptname);
	document.getElementById("ptname").innerHTML = '<strong>Name: </strong> ' + ptname;
	document.getElementById('newPTName').value = "";
	if (document.getElementById('newPTEmail').value != ""){
		ptemail = document.getElementById('newPTEmail').value;
	}
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



      /*data.addRows([
      	[d10, 0], [d9, 0], [d8, 4], [d7, 4], [d6, 4],
        [d5, 5], [d4, 5], [d3, 4], 
        [d2, 5], [d1, 5], [new Date(), 5]
      ]);*/
      data.addRows([
      	[new Date(2018, 3, 12), 3], [new Date(2018, 3, 13), 0], [new Date(2018, 3, 14), 3], [new Date(2018, 3, 15), 3], [new Date(2018, 3, 16), 3],
        [new Date(2018, 3, 17), 4], [new Date(2018, 3, 18), 4], [new Date(2018, 3, 19), 3], 
        [new Date(2018, 3, 20), 4], [new Date(2018, 3, 21), 4], [new Date(2018, 3, 22), 4]
      ]);

      var options = {
        hAxis: {
          title: 'Date',
          minValue: new Date(2018, 3, 12),
   	 	  maxValue: new Date(2018, 3, 22),
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

if (window.addEventListener) {
    window.addEventListener('resize', createGraph);
}
else {
    window.attachEvent('onresize', createGraph);
}

function setUpModal(){
  var eModal = document.getElementById('emailModal');
  var nModal = document.getElementById('nameModal');
  var sModal = document.getElementById('switchModal');
  var mModal = document.getElementById('messageModal');
  var iModal = document.getElementById('injuryModal');
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
  document.getElementById("iclose").onclick = function() {
  	  document.getElementById('newInjury').value = "";
      iModal.style.display = "none";
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
    if (event.target == iModal) {
    	document.getElementById('newInjury').value = "";
    	iModal.style.display = "none";
    }
  }
}