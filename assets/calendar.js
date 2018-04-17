function setProgress() {
  var numberOfChecks = 0;
  var inputs = document.getElementsByTagName("input");
  var numberOfBoxes = 0;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "checkbox") {
      if (!inputs[i].hidden) numberOfBoxes++;
      if (inputs[i].checked) numberOfChecks++;
    }
  }

  if (numberOfChecks == 0) {
    document.getElementById("progress").src = "../images/empty.png";
  } else if (numberOfChecks == numberOfBoxes) {
    document.getElementById("progress").src = "../images/full.png";
  } else {
    document.getElementById("progress").src = "../images/middle.png";
  }
}

function showPlusMenu() {
  document.getElementById("plus-menu").hidden = !document.getElementById("plus-menu").hidden;
}

function hidePlusMenu() {
  document.getElementById("plus-menu").hidden = true;
}

function showVideo() {
  document.getElementById("video-iframe").src = "https://www.youtube.com/embed/o5b0gS7wI1k";
  document.getElementById("video").hidden = false;
  document.getElementById("video-iframe").hidden = false;
}

function hideVideo() {
  document.getElementById("video-iframe").src = "";
  document.getElementById("video").hidden = true;
  document.getElementById("video-iframe").hidden = true;
}

function showAppt() {
  hidePlusMenu();
  document.getElementById("appt-schedule").hidden = false;
}

function hideAppt() {
  document.getElementById("appt-schedule").hidden = true;
}

function addAppt() {
  document.getElementById("thurs-appt").hidden = false;
  hideAppt();
}

function showAddExercise() {
  hidePlusMenu();
  document.getElementById("add-exercise").hidden = false;
}

function hideAddExercise() {
  document.getElementById("add-exercise").hidden = true;
}
