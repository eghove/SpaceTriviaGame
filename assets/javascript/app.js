

//some variables to hold timers

//GLOBAL VARIABLES

//trivia questions object

$(document).ready(function() { //wrapping all of this in this onready function
//Trivia questions object
var triviaQuestions = {
    'Q1' : {
        text: 'text for the question1',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'Answer 1',
        image: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'
    },

    'Q2' : {
        text: 'text for the question',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    'Q3' : {
        text: 'text for the question',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    'Q4' : {
        text: 'text for the question',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    'Q5' : {
        text: 'text for the question',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    'Q6' : {
        text: 'text for the question',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    'Q7' : {
        text: 'text for the question',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    'Q8' : {
        text: 'text for the question',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    'Q9' : {
        text: 'text for the question',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    


}

//correct answers counter
var correctA=0;

//incorrect answers counter
var incorrectA=0;

var correct=false;

var timesUp=false;



//player selects a potential answer
function checkGuess (obj) {
        console.log('onclick is active');
        $( ".answerBlock").on("click", function(){
            console.log('click function is fired!')
            guessSelected=$(this).attr("id", ); //may not need this
            guessText=$(this).text(); // takes the text from the answer selected, puts it here
            if (guessText===obj.correctAnswer){ // checks to see if the answer guessed is the right answer
                correctA++;
                correct=true;
            } else {
                incorrectA++;
                correct=false;};
                renderTitleCard(obj) // moves on to the title card       
        });
    }; 



//after a guess is made, I'll need a component that builds the webpage between cards, with the gif or whatever
function renderTitleCard(obj) {
    $( '#triviaSpace').empty(); //empties out the previous stuff
    var correctAnswer=$("<div id='correctAnswer'>");
    correctAnswer.text('The correct answer is: ' + obj.correctAnswer);
    var verdict = $("<div class='verdict'>"); 
    var image = $("<img src=" + obj.image  + ">");
    if (correct===true) {
        verdict.addClass("correct");
        verdict.text("YOU ARE CORRECT!");
    }; 
    if (correct===false) {
        verdict.addClass("incorrect");
        verdict.text("YOU ARE WRONG!");
    }; 
    if (timesUp===true) {
        verdict.addClass("times-up");
        verdict.text("TIME'S UP!");
    };

    $( '#triviaSpace').append(verdict).append(correctAnswer).append(image);
}

//I'll need a component that tracks time
var intervalId;

var timerRunning=false;

var timer = {
    
    time: 15, //sets initial time for questions and title card

    reset: function() {
        timer.time=15; // resets the initial time for questions and title card
        timerRunning=false;
        timesUp=false;
    },

    countdown: function() {
        if(timer.time > 0) {
            timer.time--;
            timer.displayTime(); 
        } 
        if (timer.time===0) {
            timesUp=true;
            timer.stop();
        }
        console.log(timer.time);
        console.log(timesUp);
    },

    start: function() {
        if(!timerRunning) {
        intervalId=setInterval(timer.countdown, 1000);
        timerRunning=true;
        }
    },

    stop: function() {
        timerRunning=false;
        clearInterval(intervalId);
    },

    displayTime: function() {
        var result = timer.time;
        $( "#timer" ).html('<p> Time Remaining: 00:' + result + '</p>');
    }


}

//I'll need a component that builds the base page once the user decides to play

//I'll need a component that reloads the game


//Function that displays the questions and potential answers
function renderQuestion(obj) {
    timer.reset();
    timer.start();
    timer.countdown();
    $("#triviaSpace").empty(); // empties out the previous stuff
    var triviaBlock = $("<div>"); //creating an empty div, assigning it to this variable
    var questionText = $('<div id="questionText">'); // creates the div for the Trivia Question
    questionText.text(obj.text); // pulls in the question text, puts it in the div for questionText
    triviaBlock.append(questionText); // appends the questionText to the triviaBlock div
    $( "#triviaSpace").append(triviaBlock); // Renders the trivia block so far
    //need to build the for loop for possible answers
    for (i=0; i<4; i++) {
        var answerBlock = $('<div class="answerBlock">'); 
        answerBlock.text(obj.options[i]).attr("id", "answer" + i);
        $( "#triviaSpace").append(answerBlock);
    };
};

//game play

renderQuestion(triviaQuestions.Q1);
checkGuess(triviaQuestions.Q1);








}); //end of ready wrap function