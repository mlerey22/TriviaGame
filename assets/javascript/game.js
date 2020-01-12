$( document ).ready(function() {
    //  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 90;
    
intervalId = setInterval(count, 1000);

function count() {

    //  TODO: increment time by 1, remember we cant use "this" here.
    time--;
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    let currentTime = timeConverter(time);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#timer").text(currentTime);
}
function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
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
}$("#timer").text(time);
});