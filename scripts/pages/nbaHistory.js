import { createCalendar } from "../functions/createCalendar.js";
import { questions } from "../data/data3.js";
import { createTiers } from "../functions/createTiers.js";
import { dataTiers } from "../data/data.js";

const btnStartQuiz = document.getElementById("btn-start-quiz");
const divQuiz = document.getElementById("div-quiz");
const btnSubmit = document.getElementById("btn-submit");
const divQuizStart = document.getElementById("div-quiz-start");
const inputNameQuiz = document.getElementById("input-name-quiz");
const divRankingQuiz = document.getElementById("div-ranking-users");
const divTiers = document.getElementById("div-tiers");

let dataRanking = localStorage.getItem("data-ranking");
let userName = "";
let answer = null; // null when nothing selected
let score = 0;
let index = 0; // starts at first question

function createQuiz(index) {
  // reset selected answer for this question
  answer = null;

  divQuiz.innerHTML = `
    <h3 class="d-flex justify-content-center question-history">
      ${questions[index].q}
    </h3>
    <div>
      ${questions[index].a
        .map(
          (e, i) => `
        <div class="options">
          <input 
            type="radio" 
            id="question${i}" 
            name="questions" 
            value="${e.isCorrect}"
          >
          <label for="question${i}">${e.text}</label><br>   
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// single change listener → doesn’t get duplicated
divQuiz.addEventListener("change", ({ target }) => {
  if (target.name === "questions") {
    answer = target.value; // "true" or "false"
  }
});

function handleNextQuestion() {
  // make sure the user selected something
  if (answer === null) {
    alert("Please select an answer before continuing.");
    return;
  }

  // if correct, add score
  if (answer === "true") {
    score += 1;
  }

  // move to next question
  index += 1;

  // if quiz is over
  if (index >= questions.length) {
    divQuizStart.style.display = "block";
    divQuiz.style.display = "none";
    btnSubmit.style.display = "none";

    // get ranking from localStorage
    dataRanking = JSON.parse(localStorage.getItem("data-ranking")) || [];

    // push new result
    dataRanking.push({ userName, score });

    // save back
    localStorage.setItem("data-ranking", JSON.stringify(dataRanking));

    // show final message
    divQuizStart.innerHTML = `
      <p class="text-center fw-bold">
        Congratulations 🎉, You've scored ${score} points out of ${questions.length}.
      </p>
      <button 
        class="btn btn-danger col-1 mx-auto mt-2 mb-2 btn-finish" 
        onclick="window.location.reload()"
      >
        Finish Quiz
      </button>
    `;
    return;
  }

  // render next question
  createQuiz(index);
}

function handleStartQuiz() {
  userName = inputNameQuiz.value.trim();

  if (!userName) {
    alert("Enter your name to start the quiz.");
    return;
  }

  // hide intro/start area (if it has instructions + name input)
  divQuizStart.style.display = "none";

  // show first question
  createQuiz(index);

  // show submit/next button
  btnSubmit.style.display = "block";
}

function createRanking() {
  const newDataRanking =
    JSON.parse(localStorage.getItem("data-ranking")) || [];

  divRankingQuiz.innerHTML = "";
  newDataRanking.forEach((element) => {
    divRankingQuiz.innerHTML += `
      <p>Name: ${element.userName} / Score: ${element.score}</p>
    `;
  });
}

window.addEventListener("load", () => {
  createCalendar();
  createTiers(dataTiers, divTiers);

  if (!dataRanking) {
    localStorage.setItem("data-ranking", JSON.stringify([]));
  }

  createRanking();
});

btnStartQuiz.addEventListener("click", handleStartQuiz);
btnSubmit.addEventListener("click", handleNextQuestion);
