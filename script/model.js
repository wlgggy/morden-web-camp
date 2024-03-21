const quizData = [
  {
    question: "웹개발에 주로 사용되는 프론트언어는?",
    answers: {
      a: "일본어",
      b: "다랑어",
      c: "자바스크립트",
    },
    correct: "c",
  },
  {
    question: "웹 디자인에 사용되는 언어는?",
    answers: {
      a: "미싱",
      b: "css",
      c: "돈까s",
    },
    correct: "b",
  },
  {
    question: "블로그 형태로 웹사이트를 쉽게 개발할 수 있는 방식을 무엇이라고 하는가?",
    answers: {
      a: "CMS",
      b: "WAX",
      c: "KISWISS",
    },
    correct: "a",
  },
];


const quizDisplay = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

function buildQuiz() {
  const output = [];
  quizData.forEach((currentQuestion, questionNum) => {
    const answers = [];
    for (item in currentQuestion.answers) {
      answers.push(`<label>
                                               <input type="radio" name="question${questionNum}" value="${item}">
                                                   ${item} : ${currentQuestion.answers[item]}
                                               </label>`);
    }
    output.push(`<div class="question"> ${currentQuestion.question}</div>
                                         <div class="answer">${answers.join("")}</div>`);
  });
  quizDisplay.innerHTML = output.join("</br>");
}

function showResult() {
  const answerDisplays = quizDisplay.querySelectorAll(".answer");
  let numCorrect = 0;

  quizData.forEach((currentQuestion, questionNum) => {
    const answerDisplay = answerDisplays[questionNum];
    const selector = `input[name=question${questionNum}]:checked`;
    const userAnswer = (answerDisplay.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correct) {
      numCorrect++;
      answerDisplays[questionNum].style.color = "lightgreen";
    } else {
      answerDisplays[questionNum].style.color = "red";
    }
  });
  resultDisplay.innerHTML = `${numCorrect} out of ${quizData.length}`;
}

buildQuiz();
submitBtn.addEventListener("click", showResult);
