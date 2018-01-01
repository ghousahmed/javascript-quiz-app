var questions = [
    {

        "question": "This set of Javascript Multiple Choice Questions & Answers (MCQs) focuses on “Object Attributes and Serialization”.",
        "option1": "String",
        "option2": "Object",
        "option3": "Serialized Object",
        "answer": "2"
    },
    {

        "question": "The object has three object attributes namely",
        "option1": "Class, parameters, object’s extensible flag",
        "option2": "Prototype, class, object’s extensible flag",
        "option3": "Prototype, class, objects’ parameters",
        "answer": "2"
    },
    {

        "question": "In the above snippet, firstname and surname are",
        "option1": "properties",
        "option2": " property values",
        "option3": " property names",
        "answer": "3"
    },
    {

        "question": "A linkage of series of prototype objects is called as",
        "option1": "prototype stack",
        "option2": "prototype chain",
        "option3": "prototype class",
        "answer": "2"
    },
    {

        "question": "In the above syntax, the datatype within the square brackets must be",
        "option1": " A String",
        "option2": "An object",
        "option3": "An integer",
        "answer": "1"
    },
    {

        "question": "The basic purpose of the toLocaleString() is to",
        "option1": "return a localised object representation",
        "option2": "return a parsed string",
        "option3": "return a localized string representation of the object",
        "answer": "3"
    },
    {

        "question": " Do functions in JavaScript necessarily return a value ",
        "option1": "It is mandatory",
        "option2": "Not necessary",
        "option3": "Few functions return values by default",
        "answer": "3"
    },
    {

        "question": "If you have a function f and an object o, you can define a method named m of o with",
        "option1": " o.m=m.f;",
        "option2": " o.m=f;",
        "option3": "o=f.m;",
        "answer": "1"
    }
];


//var quizIndex = 0;
//var correct = 0;

window.onload = function timer() {

    var min = 2;
    var sec = 59;
    var int = setInterval(function () {
        if (min < 10 && sec < 10) {
            time.innerHTML = "0" + min + ":" + "0" + sec;
        }
        else if (min < 10) {
            time.innerHTML = "0" + min + ":" + sec;
        }
        else if (sec < 10) {
            time.innerHTML = min + ":" + "0" + sec;
        }

        else { time.innerHTML = min + ":" + sec; }
        sec--;

        if (min < 0) {
            clearInterval(int);
            time.innerHTML = "Time Out";
            container.style.display = 'none';
            resultCont.style.display = '';
            resultCont.textContent = 'Your score; ' + score + "%" + " " + 'Correct Ans' + ':' + score / 12.5;
            resul.style.display = 'block';
            war.style.display = 'none';
            marks.style.display = 'block';
            out.style.display = 'block';
            out.innerHTML = "!Time Out"
            if(score == null){
        marks.innerHTML = "<i>'Sorry You Failed'</i>";
    }

        }
        else if (sec == 0) {
            min--;
            sec = 60;
        }
        if (min === 00 && sec === 59) {
            time.style.color = 'red';
        }

    }, 1000);
};



var currentQuestion = 0;
var score = 0;
var time = document.getElementById('timer');
var totQuestion = questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var nextBtn = document.getElementById('next-btn');
var resultCont = document.getElementById('result');
var resul = document.getElementById('resul');
var war = document.getElementById('war');
var marks = document.getElementById('marks');
var out = document.getElementById('timeout');






function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;

};


function loadNQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (selectedOption == null) {
        alert('Please select your answer!');
        return;
    }

    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 12.5;
    }
    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion == totQuestion) {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your score; ' + score + "%" + " " + 'Correct Ans' + ':' + score / 12.5;
        resul.style.display = 'block';
        war.style.display = 'none';
        marks.style.display = 'block';

        return;

    }
    if (score > 60) {
        marks.innerHTML = "<b>'Congratulation You Passed'</b>";
    }
    else {
        marks.innerHTML = "<i>'Sorry You Failed'</i>";
    }

    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);


function go() {
    location = 'index1.html';
}

