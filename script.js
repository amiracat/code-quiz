let startQuiz = document.querySelector(".start");
let secondsLeft = 75;
let timeEl = document.querySelector(".time");
let intro = document.querySelector(".intro-section");
let timerInterval;
let quizContainer = document.querySelector("#quiz")
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit-initials");

let finalScore = document.querySelector("#final-score");
let wrongChoice = document.querySelectorAll(".wrong");
let correctChoice = document.querySelectorAll(".correct");
let wrongAnswer
let correctAnswer
let wrongChoiceTwo = document.querySelectorAll(".wrong-two");
let correctChoiceTwo = document.querySelectorAll(".correct-two");
let wrongChoiceThree = document.querySelectorAll(".wrong-three");
let correctChoiceThree = document.querySelectorAll(".correct-three");
let wrongChoiceFour = document.querySelectorAll(".wrong-four");
let correctChoiceFour = document.querySelectorAll(".correct-four");
let wrongChoiceFive = document.querySelectorAll(".wrong-five");
let correctChoiceFive = document.querySelectorAll(".correct-five");


let rightWrong = document.getElementById("rw-response");
let questionTwo = document.querySelector("#question-two")
let questionThree = document.querySelector("#question-three")
let questionFour = document.querySelector("#question-four")
let questionFive = document.querySelector("#question-five")



function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Time's up! You lose.";
};


startQuiz.addEventListener("click", function () {

  intro.style.display = "none";
  document.getElementById("quiz").className = "vis";
  setTime();
});

//turn answer choices into buttons Q1 to Q2

for (let button of wrongChoice) {
  button.addEventListener("click", function () {
    document.getElementById("rw-response").className = "vis";
    rightWrong.textContent = "Wrong!";
    //drop 10 seconds from timer
    secondsLeft -= 10;
    if (secondsLeft <= 0) {
      // Stops timer
      clearInterval(timerInterval);
      sendMessage();
    }
    document.getElementById("quiz").className = "no-show";
    questionTwo.style.display = "block";

});
}

for (let button of correctChoice) {
  button.addEventListener("click", function () {
    document.getElementById("rw-response").className = "vis";
    rightWrong.textContent = "Yay!";
    document.getElementById("quiz").className = "no-show";
    questionTwo.style.display = "block";
  });
}

//Q2 to Q3
for (let button of wrongChoiceTwo) {
  button.addEventListener("click", function () {
    //document.getElementById("rw-response").className = "vis";
    rightWrong.textContent = "Wrong!";
    //drop 10 seconds from timer
    secondsLeft -= 10;
    if (secondsLeft <= 0) {
      // Stops timer
      clearInterval(timerInterval);
      sendMessage();
    }
    questionTwo.style.display = "none";    
    questionThree.style.display = "block";

});
}

for (let button of correctChoiceTwo) {
  button.addEventListener("click", function () {
    rightWrong.textContent = "Yay!";
    questionTwo.style.display = "none";    
    questionThree.style.display = "block";
  });
}


//Q3 to Q4
for (let button of wrongChoiceThree) {
  button.addEventListener("click", function () {
    rightWrong.textContent = "Wrong!";
    secondsLeft -= 10;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
    questionThree.style.display = "none";    
    questionFour.style.display = "block";

});
}

for (let button of correctChoiceThree) {
  button.addEventListener("click", function () {
    rightWrong.textContent = "Yay!";
    questionThree.style.display = "none";    
    questionFour.style.display = "block";
  });
}

//Q4 to Q5
for (let button of wrongChoiceFour) {
  button.addEventListener("click", function () {
    rightWrong.textContent = "Wrong!";
    secondsLeft -= 10;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
    questionFour.style.display = "none";    
    questionFive.style.display = "block";

});
}

for (let button of correctChoiceFour) {
  button.addEventListener("click", function () {
    rightWrong.textContent = "Yay!";
    questionFour.style.display = "none";    
    questionFive.style.display = "block";
  });
}

//Q5 to final score
for (let button of wrongChoiceFive) {
  button.addEventListener("click", function () {
    rightWrong.textContent = "Wrong!";
    secondsLeft -= 10;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
    questionFive.style.display = "none";    
    finalScore.style.display = "block";
    finalScore = secondsLeft;
});
}

for (let button of correctChoiceFour) {
  button.addEventListener("click", function () {
    rightWrong.textContent = "Yay!";
    questionFive.style.display = "none";    
    finalScore.style.display = "block";
    finalScore = secondsLeft;
  });
}




//if the clicked button represents the correct answer, yay
//if the clicked button = event.target.id (choiceone, choicetwo, choicethree)
//correct answer is question.correctAnswer)


//how to build html from js
//within quiz container have Q container and Choices container, each choice
//if user clicks a choice, then what happens.
//attach event handler to each choice - 
//use: this or event object - will tell you which button is clicked
//think like a computer! step by step.