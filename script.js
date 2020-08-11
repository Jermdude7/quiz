var startGameBtn = document.querySelector("#start-game");
var startPrompt = document.querySelector("#start-prompt");
var questionPrompt = document.querySelector("#question-prompt");
var questionText = document.querySelector("#question-text");
var questionOptions = document.querySelector("#question-options");
var timerContainer = document.querySelector(".timer-container");
var timeSpan = document.querySelector("#time")
var questionIndex = 0;
var time = 90;
var timer;
var questions = [
  {
    text: "What is the coolest ship in Star Wars? ",
    options: ["Yv-666", "T65-Xwing", "Yt-1300", "Yt-2400"],
    answer: "Yt-1300",
  },
  {
    text: "Who was the first Sith to use the Rule of two?",
    options: ["Darth Revan", "Dark Maul", "Darth Bane", "Darth Jedi"],
    answer: "Darth Bane",
  },
];
// more questions

function startTimer() {
  timer = setInterval(function () {
    time--;
    timeSpan.textContent = time;
    if(time ===0){
        endGame();
    }
  }, 1000);
}

function endGame(){
    alert ("Game Over!");
    clearInterval(timer);
}




startGameBtn.addEventListener("click", function (e) {
  startPrompt.style.display = "none";
  questionPrompt.style.display = "block";
  timerContainer.style.display = "block";
  startTimer();
  renderQuestion();
    });

function renderQuestion() {
  var question = questions[questionIndex];
  questionText.textContent = questions[questionIndex].text;
  questionOptions.innerHTML = "";

for(var i=0; i< question.options.length; i++){
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary question-option");
    btn.setAttribute("value",question.options[i]);
    btn.textContent = question.options [i];
    questionOptions.append(btn);
    }
}

document.body.addEventListener("click",function (e){
    if(!e.target.matches(".question-option"))return;
    var value = e.target.value;
    if(questions[questionIndex].answer === value) {
    console.log("Correct!");
    }else{
        console.log("You were Wrong!");
        time -= 10;
        timeSpan.textContent = time;
    }   
        questionIndex++;
      
     if(questionIndex === questions.length){
         endGame();
     } else{
         renderQuestion();

     }
      
      
      
            
});







