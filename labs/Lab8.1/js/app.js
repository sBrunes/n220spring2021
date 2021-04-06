let dvBox = document.getElementById("box");

dvBox.style.backgroundColor = "#219c35";
//Sets the background color

dvBox.style.height = "100px";
dvBox.style.width = "100px";
//Initial height and width of the box   

var BoxHeight = 100;
var BoxWidth = 100;
console.log(BoxHeight);
//Variables for the height and width

function grow() {

  BoxHeight *= 1.1;
  BoxWidth *= 1.1;
  //Increases the values by 10%

  dvBox.style.height = BoxHeight + "px";
  dvBox.style.width = BoxWidth + "px";
  //Sets the new values as the height and width in pixels
}