// let BoxArray = [];

for(i = 0; i < 100; i++) {
  let newBox = document.createElement("div");
  //Creates a new element

  // BoxArray.push(newBox);

  newBox.style.width = "20px";
  newBox.style.height = "20px";
  //Height and width fo the element

  newBox.style.float = "left";
  //Makes all the boxes float left
  
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  //Sets random values for the rbg

  newBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  //Sets the background color to the random rgb value
  
  document.body.appendChild(newBox);
}

