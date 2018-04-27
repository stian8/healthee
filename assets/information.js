var injuries = ["Knee Dislocation"];
// for more permanent do localStorage
if (sessionStorage.injuries) {
    injuries = JSON.parse(sessionStorage.getItem("injuries"));
} else {
    sessionStorage.setItem("injuries", JSON.stringify(injuries));
}

function setupInjuries(){
    var dropdown = document.getElementById("injuryDropdown");
    for (i = 0; i < injuries.length; i++){

      var inj= document.createElement('p');
      var id = "injury" + i.toString();
      inj.id = id;
      inj.innerHTML = injuries[i];
      inj.onclick = function (num) {
            return function () {
                setInjury(num);
            };
        }(id);
      dropdown.appendChild(inj);
      }
      var iadd= document.createElement('button');
      iadd.id = "iadd";
      iadd.innerHTML = "&#x2b;"
      iadd.onclick = function() {
        document.getElementById('injuryModal').style.display = "block";
      }
      dropdown.appendChild(iadd);
}

function setUpModal(){
  var modal = document.getElementById('injuryModal');
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


function selectInjury() {
    document.getElementById("injuryDropdown").classList.toggle("show");
}

function setInjury(injury){
    document.getElementById("dropbtn").innerHTML =  document.getElementById(injury).innerHTML + '<i class="fa fa-angle-double-down"></i>';
}

function addInjury(){
    var newInjury = document.getElementById("newInjury").value;
    if(newInjury != ""){
        var dropdown = document.getElementById("injuryDropdown");
        var inj= document.createElement('p');
        var id = "injury" + injuries.length.toString();
        inj.id = id;
        inj.innerHTML = newInjury;
        inj.onclick = function (num) {
            return function () {
                setInjury(num);
            };
        }(id);
      dropdown.insertBefore(inj, dropdown.childNodes[injuries.length + 1]);
      injuries.push(newInjury);
      sessionStorage.setItem("injuries", JSON.stringify(injuries));
    }
    document.getElementById('injuryModal').style.display = "none";
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}