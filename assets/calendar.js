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
    document.getElementById("progress").src = "images/empty.png";
    //document.getElementById("cur-day").style.backgroundColor = "#FFC0CB"
    document.getElementById("cur-day-header").style.backgroundColor = "#FFC0CB"
  } else if (numberOfChecks == numberOfBoxes) {
    document.getElementById("progress").src = "images/full.png";
    //document.getElementById("cur-day").style.backgroundColor = "lightgreen"
    document.getElementById("cur-day-header").style.backgroundColor = "lightgreen"
  } else {
    document.getElementById("progress").src = "images/middle.png";
    //document.getElementById("cur-day").style.backgroundColor = "#FFC0CB"
    document.getElementById("cur-day-header").style.backgroundColor = "#FFC0CB"
  }
}

function showPlusMenu() {
  document.getElementById("plus-menu").hidden = !document.getElementById("plus-menu").hidden;
}

function hidePlusMenu() {
  document.getElementById("plus-menu").hidden = true;
}

function showHamVideo() {
  document.getElementById("video-iframe").src = "https://www.youtube.com/embed/bOf2AOpG4qM";
  document.getElementById("video").hidden = false;
  document.getElementById("video-iframe").hidden = false;
}

function showLiftVideo() {
  document.getElementById("video-iframe").src = "https://www.youtube.com/embed/l-mPHKQFMkk";
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
  document.getElementById("appt-subject").value = "";
  document.getElementById("appt-date").value = "";
  document.getElementById("appt-time").value = "";
  document.getElementById("appt-location").value = "";
}

function addAppt() {
  document.getElementById("thurs-appt").hidden = false;
  hideAppt();
}

function deleteAppt() {
  document.getElementById("thurs-appt").hidden = true;
}

function showAddExercise() {
  hidePlusMenu();
  document.getElementById("add-exercise").hidden = false;
}

function hideAddExercise() {
  document.getElementById("add-exercise").hidden = true;
  document.getElementById("ex").value = "";
  document.getElementById("ex-vid").value = "";
  document.getElementById("ex-info").value = "";
  document.getElementById("add-ex").checked = false;
}

function addExercise() {
  document.getElementById("calfCB").hidden = false;
  document.getElementById("calf").hidden = false;
  hideAddExercise();
}

function showNote() {
  hidePlusMenu();
  document.getElementById("self-note").hidden = false;
}

function hideNote() {
  document.getElementById("self-note").hidden = true;
  document.getElementById("note-text").value = "";
}

function addNote() {
  document.getElementById("mon-note").hidden = false;
  hideNote();
}
