//intiate the program
$(document).ready(function()   {
    //create the timer for the game
    var timerCounter = 30;
    var triviaTimer = setInterval(function()    {
        timerCount--;
        document.getElementById("timer").textContent = timerCounter;
        if (timerCounter <= 0)
        clearInterval(triviaTimer);
    }, 1000)
}
