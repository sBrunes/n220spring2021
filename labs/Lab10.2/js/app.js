let answerDIV = document.getElementById("answerDIV");

//Function that sets the inner HTML of the response div to the answer attribute
function giveAnswer(event) {
    let answer = event.target.getAttribute("answer");
    answerDIV.innerHTML = answer;
}