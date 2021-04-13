let objects = [

  { color: "#FF0000", height: 100, width: 300 },
 
  { color: "#FFFF00", height: 200, width: 200 },
 
  { color: "#ff0000", height: 300, width: 100 },
 
 ];
 //Array of objects lisitng the properties for the new divs

for(i = 0; i < objects.length; i++) {
  let newObject = document.createElement("div");
  //Creates a new element

  newObject.style.width = objects[i].width + "px";
  newObject.style.height = objects[i].height + "px";
  newObject.style.backgroundColor = objects[i].color;
  //Height, color, and width of the element based on the objects of the array

  document.body.appendChild(newObject);
}

