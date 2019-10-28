//intiate the program
$(document).ready(function () {
    //create the timer for the game
    var timerCounter = 30;
    var triviaTimer = setInterval(function () {
        timerCount--;
        document.getElementById("timer").textContent = timerCounter;
        if (timerCounter <= 0)
            clearInterval(triviaTimer);
    }, 1000)
    // create the trivia board
    function triviaGame() {
        //stores the HTML outputs to this array
        var output = [];

        //questions need to loop 
        triviaQ.forEach(newQ, qNum) => {
            var answerBox = []
            for (answerChoice in newQ.answerBox) {
                answerBox.push(
                    <label>
                        <input type='radio' name="question$(qNum)" value="$(answerChoice)">
                            ${answerChoice} :
              ${newQ.answerBox[answerChoice]}
                </label>
                        );
                    }
                });
                
            }
            }
