$( document ).ready(function() {


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
   
    //currentTime = timeConverter(time);
    
    $("#timer").text(time);
    
    
}
/*function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}*/
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
    document.getElementById("end").style.display = "initial";
    $("#questions").css("display", "none");

}

});