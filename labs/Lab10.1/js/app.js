let dv1 = document.getElementById("dv1");
let dv2 = document.getElementById("dv2");
let dv3 = document.getElementById("dv3");
//Gets the elements from document

dv1.style.height = "200px";
dv1.style.width = "200px";
dv1.style.float = "left";
dv1.style.backgroundColor = "#9c9c9c";
dv1.style.margin = "5px";
//DIV one styling

dv2.style.height = "200px";
dv2.style.width = "200px";
dv2.style.float = "left";
dv2.style.backgroundColor = "#9c9c9c";
dv2.style.margin = "5px";
//div two styling

dv3.style.height = "200px";
dv3.style.width = "200px";
dv3.style.float = "left";
dv3.style.backgroundColor = "#9c9c9c";
dv3.style.margin = "5px";
//div three styling


function doThing(event){
    //Function that changes the color to the color specified int he attribute
    let newColor = event.target.getAttribute("future-color");
    event.target.style.backgroundColor = newColor;
}