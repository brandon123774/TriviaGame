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
        
                            
});
// create the trivia board
function triviaGame() {

    //stores the HTML outputs to this array
    var output = [];

    //questions need to loop 
    triviaQ.forEach((newQuestion, qNumber) => {
        var answerBox = []

        for (answerChoice in newQuestion.answerBox) {
            answerBox.push(
                    <input type="radio" name="question${qNumber}" value="${answerChoice}">
                    ${answerChoice} :
                    ${newQuestion.answerBox[answerChoice]}
                    /</input>
                );
        }
        //need to push the questions and answers into an array to use
            output.push(
        `       <div class="question"> ${newQuestion.question} </div>
                <div class="answer"> ${answerBox.join("")} </div>`
            );
         });
                    
        //Write the questions, answers, and radio buttons to the HTML doc
            triviaContainer.innerHTML = output.join("");
}
                                            
//Need to keep track of the answers with a function
function displayResults()   {
    var answerArray = triviaContainer.querySelectorAll(".answer");
    var numberCorrect = 0;

    //need to get the answer input by the user
    triviaQ.forEach((newQuestion, qNumber) => {
        var answerArray = answerArray[qNumber];
        var answerChoice="input[name=question$(qNumber)]: checked";
        var userAnswer = (answerArray.querySelector(selector) || {}.value);

        //increment user points with correct answer
        if (userAnswer === newQuestion.correctAnswer)   {
            numberCorrect ++;
        }
    });

    //Need to display the score now
    resultsArray.innerHTML = "$(numberCorrect) out of $(triviaQuestion.length)";
}

                                    
                                                    
                                                
                                                
