
var questions = [{
    question: "Which city was BLACKPINK member Ros\u00e9  born in?",
    choices: ["Melbourne", "Seoul", "Auckland", "New York"],
    correctAnswer: 2
}, {
    question: "Finish The Lyrics: \"...Look up in the sky. It's a bird, it's a _____.\"",
    choices: ["monster", "plane", "goat", "eagle"],
    correctAnswer: 1
}, {
    question: "What is Jisoo's dog name ?",
    choices: ["Leo", "Kai", "Dalgom","Hank"],
    correctAnswer: 2
}, {
    question: "Who is Blackpink's dance robot ?",
    choices: ["Seulgi", "Ros\u00e9", "Mickael Jackson", "Lisa"],
    correctAnswer: 3
}, {
    question: "Who appeared in the MV 'That XX' of G-dragon?",
    choices: ["Jennie", "Ros\u00e9", "Jisoo", "Lisa"],
    correctAnswer: 0
}, {
    question: "Who collaborated with singer/rapper G-dragon for the song 'Without You'?",
    choices: ["Jennie", "Bruh.That song doesn't exist.", "GD sang it alone.", "Rosie"],
    correctAnswer: 3	
	
}, {
    question: "What is the release date of Boombayah MV?",
    choices: ["September 15, 2016", "March 27, 1997 ;)", "June 6, 2016", "August 8, 2016"],
    correctAnswer: 3	
}, {
    question: "What song did BLACKPINK not sing?",
    choices: ["Loser", "What is Love?", "Sure Thing", "So hot"],
    correctAnswer: 1
}, {
    question: "At what age did Jisoo become a YG trainee?",
    choices: ["15", "18", "16", "20"],
    correctAnswer: 2

}, {
    question: "Towards the end of the song 'As if it's your last', BLACKPINK form the word LOVE with their fingers. Which letter does Lisa represent ?",
    choices: ["L", "O", "V", "E"],
    correctAnswer: 2

}, {
    question: "In the Stay MV, what color is Jisoo's long dress?",
    choices: ["Blue", "Yellow", "Red", "Green"],
    correctAnswer: 1

	}, {
    question: "What is Jennie's birthdate?",
    choices: ["January 16, 1996", "March 27, 1997", "February 11, 1997", "January 3, 1995"],
    correctAnswer: 0
},{
    question: "Who goes under the legs of the other members in the BOOMBAYAH dance?",
    choices: ["Jisoo turtle rabbit", "Long legs Lisa", "Rosie Posie", "Nini"],
    correctAnswer: 2
},
                 {
    question: "Lisa once said ...",
    choices: ["What the heck unnie ??", "Cozy like rosie", "I'm not scary.", "I'm the hottest, okay ??"],
    correctAnswer: 3
},
                 {
    question: "What is the second track of Kill this love album?",
    choices: ["DDU DDU DDU", "Don't know what to do", "Kick it", "Hope Not"],
    correctAnswer: 1
},{
    question: "'I bet you wanna is a featuring with ...'",
    choices: ["lady Gaga", "Selena Gomez", "Dua Lipa", "Cardi B"],
    correctAnswer: 3
},
                 {
    question: "What color is Rosie's hair in the MV Ddu-du Ddu-du?",
    choices: ["Red", "Gray", "Blonde", "Pink"],
    correctAnswer: 0

	}, {
    question: "When did the song 'Ready for love' air ?",
    choices: ["Never", "2018", "2021", "2017"],
    correctAnswer: 0
},{
    question: "Who is Jennie's ex?",
    choices: ["JYP", "Irene (if only)", "Kai", "Baekhyun"],
    correctAnswer: 2
},
                 {
    question: "Who are Lisa's cats?",
    choices: ["Kai, Cookie, Kitty", " Leo, Louis, Lily, Luca, Lego", "Her only pet is Jennie.", "Leo and Simba"],
    correctAnswer: 1
}
                ];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                    //console.log("true"+questions[currentQuestion].question);
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $("#resultModal").modal("show");
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            $("#resultModal").modal("hide");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        id = "radio"+i;
        $('<li onclick="checkAnswer(radio'+i+')"><input class="inputs" id="radio'+i+'"type="radio" value=' + i + ' name="dynradio" />  ' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    //$(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    //$(document).find(".quizContainer > .result").show();
    $(document).find(".result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".result").show();
    if(correctAnswers<10){
    $(document).find(".comments").attr("src","img/yousuck.png");
    $(document).find(".gif_area").attr("src","img/jennie_gif.gif");
        
       }
    else if(correctAnswers>10){
         $(document).find(".comments").attr("src","img/welldone.png");
         $(document).find(".gif_area").attr("src","img/girls.gif");
    }
}

function hideScore() {
    $(document).find(".result").hide();
}
function checkAnswer(a){
  //console.log(a.id);
  id = "#"+a.id
if(!$(id).is(":checked")){
    //remove all checked
    $(".inputs").attr("checked",false); 
    $(".inputs").parent().removeClass("checked"); 
    //check this
    $(id).attr('checked', true);
    $(id).parent().addClass("checked");
}

}