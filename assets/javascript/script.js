// Write a function to start the quiz
// Write a function to make the questions show
// Write a funtion to evaluate the question
// Write a function for the end screen
// Write a funtion for timer
// Write a function to save the high score

var currentQuestionIndex = 0
var time = questions.length * 15 
var timerId = document.getElementById("timer")
var questionsElement = document.getElementById("questions") 
var timerElement = document.getElementById("time")
var choicesElement = document.getElementById("choices")
var startbuttonElement = document.getElementById("start-button")
var clock = 



function startQuiz (){ 
    var startScreenElement = document.getElementById("start-screen")
    startScreenElement.setAttribute("class","hide")
     questionsElement.removeAttribute("class")
     timerId = setInterval(clock,1000)
     timerElement.textContent = time 
     getQuestions()

     

}

function clock (){
    time--
    timerElement.textContent = time
}


function getQuestions (){
    var currentQuestion = questions[currentQuestionIndex]
    var titleElement = document.getElementById("title") 
    titleElement.textContent = currentQuestion.title 
    choicesElement.innerHTML = ""
    currentQuestion.choices.forEach(function(choice,i) {
    var choiceObject = document.createElement("button") 
    choiceObject.setAttribute("class", "choice")
    choiceObject.setAttribute("value", choice)
    choiceObject.textContent = i + 1 + " " + choice 
    choiceObject.onclick = clickQuestion
    choicesElement.appendChild(choiceObject)
    })

}
function clickQuestion (){
    if (this.value != questions[currentQuestionIndex].answer) {
        time -= 15
        timerElement.textContent = time
    }
    currentQuestionIndex++
    if (currentQuestionIndex === questions.length) {
        quizEnd()
        
    } else {
        getQuestions()
    }
setInterval(time, 15);
function time(){
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

}


console.log("a");
startbuttonElement.onclick = startQuiz;

// end quiz, timer