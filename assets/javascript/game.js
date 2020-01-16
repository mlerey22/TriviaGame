$( document ).ready(function() {

  var correctAnswers = 0;
  var incorrectAnswers = 0;
  
  var answers = ["a", "c", "c"]
  

var clockRunning = false;
var time = 10;
var currentTime;
document.getElementById("end").style.display = "none";
console.log(time);

if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
}

function count() {

    time--;
    check(time)
    
    $("#timer").text(time);
    
    
}

$("#timer").text(time);

function check(){
if (time == 0) {
    console.log("yay")
    clearInterval(intervalId);
    clockRunning = false;
    endGame()
    document.getElementById("end").style.display = "initial";
    $("#game").css("display", "none");
}}

function endGame() {
    $("#end").css("display", "initial");
    $("form").css("display", "none");
    $("timer").css("display", "none");
    console.log()
    validateQuestions()
    

}

function validateQuestions() {        
        
          var submitted = $('input[name=q1]:checked').val();
          if (submitted == answers[0]){
            correctAnswers++;
            console.log(correctAnswers);
        
  } else {
      incorrectAnswers++;
  }

 submitted = $('input[name=q2]:checked').val();
  if (submitted == answers[1]){
    correctAnswers++;
    console.log(correctAnswers);

} else {
incorrectAnswers++;
}

$("#end").html("Correct: " + correctAnswers + "<br>" + "Incorrect: " + incorrectAnswers + "<br>")



}

});