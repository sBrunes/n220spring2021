let userString = document.getElementById("userString");
let dvResponse = document.getElementById("dvResponse");
let dvCount = document.getElementById("dvCount");
let dvBadwords = document.getElementById("dvBadwords");
//Gets elements from page

function doThing() {
  var badWordCount = 0;
  //Variable for counting the amount of bad words

  let wordArray = userString.value.split(" ");
  console.log(wordArray);
  //Splits the input string into an array

  dvBadwords.innerHTML = "Bad Words Found: ";
  //Sets the initial text of the Badwords div

  for(i = 0; i < wordArray.length; i++) {
    if(wordArray[i].toUpperCase() == "CLEAR") {
      badWordCount += 1;
      dvBadwords.innerHTML += wordArray[i] + " ";
      //Increments the badword count and adds the found word to the badword div

    } else if(wordArray[i].toUpperCase() == "WATER") {
      badWordCount += 1;
      dvBadwords.innerHTML += wordArray[i] + " ";
      //Increments the badword count and adds the found word to the badword div

    } else if(wordArray[i].toUpperCase() == "TIRES") {
      badWordCount += 1;
      dvBadwords.innerHTML += wordArray[i] + " ";
      //Increments the badword count and adds the found word to the badword div

    }
  }

  if(badWordCount == 0) {
    dvBadwords.innerHTML = " ";
    //If there are no bad words found, replaces the badwords div text with a space
  }
  
  dvResponse.innerHTML = userString.value;
  dvCount.innerHTML = "This sentence contains " + badWordCount + " bad words";
  //Displays the input string, and the amount of bad words found

  userString.value = " ";
  //clears the input string
}