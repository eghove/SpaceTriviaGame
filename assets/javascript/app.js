

//some variables to hold timers

//GLOBAL VARIABLES

//trivia questions object

$(document).ready(function() { //wrapping all of this in this onready function
//Trivia questions object
var triviaQuestions = [

    {
        text: 'text for the question1',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'Answer 1',
        image: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'
    },



    {
        text: 'text for the question2',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    {
        text: 'text for the question3',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    {
        text: 'text for the question4',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    {
        text: 'text for the question5',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    {
        text: 'text for the question6',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    {
        text: 'text for the question7',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    {
        text: 'text for the question8',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    },

    {
        text: 'text for the question9',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
        image: 'image relating to the correct guess'
    }

];

//correct answers counter
var correctA=0;

//incorrect answers counter
var incorrectA=0;

var correct=false;

var timesUp=false;

var timer;

var tccardTimer;

let loopcounter=0; 



//CHECKS THE ANSWER THE USER SELECTS
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



//RENDERS THE TITLE CARD BETWEEN QUESTIONS
function renderTitleCard(obj) {
    clearTimeout(timer);
    tCardCountdown(10, obj);
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

//TRACKS TIME IN THE TITLE CARD BETWEEN QUESTIONS
function tCardCountdown (secs, obj) {
    if (secs < 1) {
        loopcounter++;
        clearTimeout(tccardTimer);
        timesUp=false;
        gamePlay();
    } else {
    $( "#timer" ).html('<p> Time Until Next Question:' + secs + '</p>');
    secs--;
    tccardTimer = setTimeout(tCardCountdown, 1000, secs, obj);;
    }
}


//TRACKS TIMES IN THE QUESTIONS, RUNS THE GAME
function questionCountdown (secs, obj) {
    if (secs < 1) {
        clearTimeout(timer);
        timesUp=true;
        renderTitleCard(obj)
        console.log("times up!");
    } else {
    $( "#timer" ).html('<p> Time Remaining: 00:' + secs + '</p>');
    renderQuestion(obj);
    checkGuess(obj);
    secs--;
    timer = setTimeout(questionCountdown, 1000, secs, obj);;
    }
}


//BUILDS THE QUESTIONS AND POTENTIAL ANSWERS
function renderQuestion(obj) {
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

function gamePlay () {
    if(loopcounter < 9) {
        questionCountdown(15, triviaQuestions[loopcounter]);
    } else {console.log("GAME OVER")};
}
//GAME PLAY




//initial call
questionCountdown(15, triviaQuestions[loopcounter]);



}); //end of ready wrap function