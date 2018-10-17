
//Going to need some sort of object to store the following: 1. Question Text 2. Potential answer text. 3. Correct answer. 4. Something that happens when after a guess is made (a gif or a video or something)

//Going to need variables to track correct answers and incorrect answers

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
        image: 'image relating to the correct guess'
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

//set the keep running variable
var keepRunning=true;

//I'll need a component that evaluates whether the the user selected the right answer. Iterates whatever variable I'm using to track right guess and wrong guesses.
function checkGuess(obj) {
        $('.answer0').on("click", function(){
            keepRunning=false;
            var checkG=$(".answer0").text();
            console.log('You selected ' + checkG);
            if (checkG===obj.correctAnswer) {
                correctA++;
            } else {incorrectA++;}
            console.log(correctA);
            console.log(incorrectA);
            console.log(keepRunning);
        });

        $('.answer1').on("click", function(){
            keepRunning=false;
            var checkG=$(".answer1").text();
            console.log('You selected ' + checkG);
            if (checkG===obj.correctAnswer) {
                correctA++;
            } else {incorrectA++;}
            console.log(correctA);
            console.log(incorrectA);
            console.log(keepRunning);
        });

        $('.answer2').on("click", function(){
            keepRunning=false;
            var checkG=$(".answer2").text();
            console.log('You selected ' + checkG);
            if (checkG===obj.correctAnswer) {
                correctA++;
            } else {incorrectA++;}
            console.log(correctA);
            console.log(incorrectA);
            
            console.log(keepRunning);
        });

        $('.answer3').on("click", function(){
            keepRunning=false;
            var checkG=$(".answer3").text();
            console.log('You selected ' + checkG);
            if (checkG===obj.correctAnswer) {
                correctA++;
            } else {incorrectA++;}
            console.log(correctA);
            console.log(incorrectA);
            console.log(keepRunning);
        });


  
};



//after a guess is made, I'll need a component that builds the webpage between cards, with the gif or whatever

//I'll need a component that tracks time

//I'll need a component that builds the base page once the user decides to play

//I'll need a component that reloads the game


//Function that displays the questions and potential answers
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

        answerBlock.text(obj.options[i]).addClass("answer" + i);
        $( "#triviaSpace").append(answerBlock);
    };
    
    
   

};

renderQuestion(triviaQuestions.Q1);
checkGuess(triviaQuestions.Q1);




//var triviaBlock = $( '<div>');
//triviaBlock.text("Some awesome text");

//$( "#triviaSpace").append(triviaBlock);

}); //end of ready wrap function