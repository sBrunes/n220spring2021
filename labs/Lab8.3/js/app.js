let dvBox = document.getElementById("box");
//Gets the box div from the page

dvBox.style.backgroundColor = "#132da1";
//Sets the background as blue initially

dvBox.style.height = "100px";
dvBox.style.width = "100px";

function over() {
  dvBox.style.backgroundColor = "#000000";
  //Sets the bacground as blacck when the mouse is over it
}

function out() {
  dvBox.style.backgroundColor = "#132da1";
  //Sets the background as blue when the mouse leaves
}