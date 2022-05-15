// Write a function to start the quiz
// Write a function to make the questions show
// Write a funtion to evaluate the question
// Write a function for the end screen
// Write a funtion for timer
// Write a function to save the high score

var currentQuestionIndex = 0
var time = questions.length * 15 
var timerId 
var questionsElement = document.getElementById("questions") 
var timerElement = document.getElementById("time")
var choicesElement = document.getElementById("choices")
var startbuttonElement = document.getElementById("start-button")


function startQuiz (){ 
    var startScreenElement = document.getElementById("start-screen")
    startScreenElement.setAttribute("class","hide")
     questionsElement.removeAttribute("class")
     timerId = setInterval(clock,1000)
     timerElement.textContent = time 
     getQuestions()

     

}

function getQuestions (){
    var currentQuestion = questions[currentQuestionIndex]
    var titleElement = document.getElementById("title") 
    titleElement.textContent = currentQuestion.title 

}



startbuttonElement.onclick = startQuiz