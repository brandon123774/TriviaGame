# TriviaGame

## Table of Contents
* Introduction
* Interesting bits of code
* Technologies Used
* How to use


## Introduction
The program is to run as a timed trivia game where there is a set time limit to answer the questions. If time runs out, the current results that are applied are shown. If the trivia questions are answered until completion, press the submit button to display the final results.


## Bits of code
The timer code needed:
 var timerCounter = 30;
    var triviaTimer = setInterval(function () {
        timerCounter--;
        document.getElementById(".timer").textContent = timerCounter;
        if (timerCounter <= 0)
            clearInterval(triviaTimer);
    }, 1000)

    setTimeout(timeUp, 1000 * 30);




	
## Technologies
Project is created using the following:
* HTML
* CSS
* Javascript
* JQuery

# How to use
 Answer the questions within the allocated time and press submit.


	