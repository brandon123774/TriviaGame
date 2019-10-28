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

//display the scores
var triviaContainer = document.getElementById("trivia");
var resultsArray = document.getElementById("results");
var submitButton = document.getElementById("submit");

//finally can start the trivia questions 
var triviaQuestions = [
    {
        question: "How many vowels are in the alphabet?",
        answers:    {
            A:"3",
            B:"12",
            C:"5 and sometimes y",
            D: "7",
        },
        correctAnswer: "C"
    },
    {
        question: "Water is...?",
        answers:    {
            A:"Pony",
            B:"Wet",
            C:"Lemon",
            D: "Cat",
        },
        correctAnswer: "B"
    },
    {
        question: "What does HP stand for?",
        answers:    {
            A:"Hewlett-Packard",
            B:"Hand Palm",
            C:"Hollow Path",
            D: "Hammer Pliers",
        },
        correctAnswer: "A"
    },
    {
        question: "How many points does a field goal in football count as?",
        answers:    {
            A:"2",
            B:"8",
            C:"3",
            D:"5",
        },
        correctAnswer: "C"
    },
    {
        question: "Where is Boston, Massachusetts?",
        answers:    {
            A:"USA",
            B:"England",
            C:"India",
            D: "Mexico",
        },
        correctAnswer: "A"
    },
    {
        question: "Who won the Womens FIFA World Cup in 2019?",
        answers:    {
            A:"The Netherlands",
            B:"England",
            C:"Team USA",
            D: "Japan",
        },
        correctAnswer: "C"
    },
    {
        question: "When is a good time to wake up?",
        answers:    {
            A:"The morning",
            B:"The afternoon",
            C:"The evening",
            D: "Anytime!",
        },
        correctAnswer: "D"
    },
];

//need to call the function for the trivia to work properly
newTrivia();

// display the scores by pressing the button
submitButton.addEventListener("click", displayResults ;)
$(function ()   {
    $(".trivia").click(function()   {

    });
})


                                    
                                                    
                                                
                                                
