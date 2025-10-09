// Variables

let currentQuestion = 0;



// Functions

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;

    showQuestion()
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}