let userNumbers = document.getElementById("userNumbers");
let dvTotal = document.getElementById("dvTotal");
let dvAverage = document.getElementById("dvAverage");
//Get the elements from the document

function AddNumbers() {
  let total = 0;

  let numberArray = userNumbers.value.split(",");
  console.log(numberArray);
  //splits the user input and stores the split string into an array

  for(i = 0; i < numberArray.length; i++) {
    numberArray[i] = Number(numberArray[i]);
  }
  console.log(numberArray);
  //Typecasts the strings to numbers

  for(i = 0; i < numberArray.length; i++) {
    total += numberArray[i];
  }
  //Adds the numbers together

  let Average = total / numberArray.length;
  //Calculates the average

  dvTotal.innerHTML = "Total: " + total;
  dvAverage.innerHTML = "Average: " + Average;
  //Sets the inner HTML of the divs to the total and average

  userNumbers.value = " ";
  //Replaces the user input with an empty space

}