
//Going to need some sort of object to store the following: 1. Question Text 2. Potential answer text. 3. Correct answer. 4. Something that happens when after a guess is made (a gif or a video or something)

//Going to need variables to track correct answers and incorrect answers

//some variables to hold timers

//GLOBAL VARIABLES

//trivia questions object

$(document).ready(function() { //wrapping all of this in this onready function
var triviaQuestions = {
    'Q1' : {
        text: 'text for the question1',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'text of correct answer',
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

//starting to build the function that will redner the questions
function renderQuestion(obj) {
    $("#triviaSpace").empty(); // empties out the previous stuff
    var triviaBlock = $("<div>"); //creating an empty div, assigning it to this variable
    var questionText = obj.text;
    triviaBlock.text(questionText);
    //need to build the for loop for possible answers
   // $( "#triviaSpace").append(triviaBlock);

};

renderQuestion(triviaQuestions.Q1);




//var triviaBlock = $( '<div>');
//triviaBlock.text("Some awesome text");

//$( "#triviaSpace").append(triviaBlock);

}); //end of ready wrap function