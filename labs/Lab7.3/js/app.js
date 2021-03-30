// let dvResponse = document.getElementById("dvResponse");
// let userName = document.getElementById("userName");

function doThing(userName, password) {
   
   var UN = String(userName.value);
   var PW = String(password.value);
   //Gets the values of the username and password
   
   //true if the values match Username and password
   if((UN == "Username") && (PW == "Password")) {

      dvResponse.innerHTML = "Success";
   } else {

      dvResponse.innerHTML = "Wrong information";
   }
}