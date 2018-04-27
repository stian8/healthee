function selectInjury() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function setInjury(injury){
    document.getElementById("dropbtn").innerHTML =  document.getElementById(injury).innerHTML + '<i class="fa fa-angle-double-down"></i>';
}

/*Util.events(document, {
  // Final initalization entry point: the Javascript code inside this block
  // runs at the end of start-up when the DOM is ready
  "DOMContentLoaded": function() { 


    // Adds click listeners to all the buttons in the interface
    //TODO: make more dynamic
    document.querySelector("#injury1").addEventListener("click", function(evt) {
      setInjury("Knee Dislocation");
    });
    document.querySelector("#injury2").addEventListener("click", function(evt) {
      setInjury("Elbow Dislocation");
    });
  },
});*/


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