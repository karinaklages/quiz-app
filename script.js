// Variables

let currentQuestion = 0;



// Functions

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;

    showQuestion()
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById("quizCompleted").style = "";
        document.getElementById("quizActive").style = "display: none";
    } else {
        let question = questions[currentQuestion];

        document.getElementById("counter").innerHTML = currentQuestion + 1;
        document.getElementById("questionText").innerHTML = question["question"];
        document.getElementById("answer_1").innerHTML = question["answer_1"];
        document.getElementById("answer_2").innerHTML = question["answer_2"];
        document.getElementById("answer_3").innerHTML = question["answer_3"];
        document.getElementById("answer_4").innerHTML = question["answer_4"];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if (selectedQuestionNumber == question["right_answer"]) {
        document.getElementById(selection).classList.add("right-answer");
    } else {
        document.getElementById(selection).classList.add("wrong-answer");
        document.getElementById(idOfRightAnswer).classList.add("right-answer");
    }

    document.getElementById("nextButton").disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById("nextButton").disabled = true;
    resetAnswers();
    showQuestion();
}


function resetAnswers() {
    document.getElementById("answer_1").classList.remove("wrong-answer");
    document.getElementById("answer_1").classList.remove("right-answer");
    document.getElementById("answer_2").classList.remove("wrong-answer");
    document.getElementById("answer_2").classList.remove("right-answer");
    document.getElementById("answer_3").classList.remove("wrong-answer");
    document.getElementById("answer_3").classList.remove("right-answer");
    document.getElementById("answer_4").classList.remove("wrong-answer");
    document.getElementById("answer_4").classList.remove("right-answer");
}
