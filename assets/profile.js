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

function openModal(){
    document.getElementById('profileModal').style.display = "block";
}

function createGraph(){
	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawBackgroundColor);

	function drawBackgroundColor() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Days');
      data.addColumn('number', 'Exercises Completed');

      data.addRows([
        [0, 3],   [1, 5],  [2, 3],  [3, 2],  [4, 0],  [5, 4],
        [6, 4],  [7, 4],  [8, 4],  [9, 4],  [10, 4], [11, 3],
        [12, 3], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4],
        [18, 5], [19, 5], [20, 4], [21, 5], [22, 5], [23, 5]
      ]);

      var options = {
        hAxis: {
          title: 'Days'
        },
        vAxis: {
          title: 'Exercises Completed'
        },
        backgroundColor: '#ffffff',
        legend: 'none',
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
}

function setUpModal(){
  var modal = document.getElementById('profileModal');
  var span = document.getElementsByClassName("close")[0]; 

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}