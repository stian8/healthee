// Gets the dialogue when the user clicks on the plant. Times out after 3 seconds.
function getDialogue() {
    var plantImg = document.getElementById("dialogue");
    plantImg.classList.add("show");
    var triangle = document.getElementById("dialogueAfter");
    triangle.classList.add("show");
    setTimeout(function(){ triangle.classList.remove("show"); plantImg.classList.remove("show");}, 3000);
}