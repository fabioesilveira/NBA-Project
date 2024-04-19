import { createCalendar } from "../functions/createCalendar.js";
import { questions } from "../data/data3.js";

const btnStartQuiz = document.getElementById("btn-start-quiz");
const divQuiz = document.getElementById("div-quiz");
const btnQuestion = document.getElementById("btn-question");
const divQuizStart = document.getElementById("div-quiz-start");
const inputNameQuiz = document.getElementById("input-name-quiz");
const divRankingQuiz = document.getElementById("div-ranking-users");

let dataRanking = localStorage.getItem("data-ranking");
let userName = "";
let answer = false;
let score = 0;
let index = 0; // Controlar as posições das perguntas - começa com 0 que é a primeira pergunta

function createQuiz(index) {
    divQuiz.innerHTML = `
    <h3 class="d-flex justify-content-center question-history">${questions[index].q}</h3>
    <div>
    <!-- Só faço o map para as respostas pois as respostas que são o array -->
    <!-- Controlando pelo index para fazer o map por posição -->
    ${questions[index].a.map((e, i) => `
    <div class="options">
        <input  type="radio" id="question${i}" name="questions" value="${e.isCorrect}">
        <label  for="question${i}">${e.text}</label><br>   
    `).join("")} 
    </div>
    </div>`;

    // Resgata o valor marcado na resposta - que só pode ser true ou false
    divQuiz.addEventListener("change", ({ target }) => {
        answer = target.value; // armazenar o valor de true ou false
    });
};

function handleNextQuestion() {
    if (answer === "true") {
        score += 1
    }

    console.log("resultado:", answer)
    console.log("pontos:", score)
    index += 1

    if (index + 1 > questions.length) {
        divQuizStart.style.display = "block"
        divQuiz.style.display = "none"
        btnQuestion.style.display = "none"


        dataRanking = JSON.parse(localStorage.getItem("data-ranking"))
        dataRanking.push({ userName, score })
        localStorage.setItem("data-ranking", JSON.stringify(dataRanking))

        divQuizStart.innerHTML = `
      <p class="text-center fw-bold">Congratulations 🎉, You've scored ${score} points of 10.</p>
      <button class="btn btn-danger col-1 mx-auto mt-2 mb-2 btn-finish" onclick="window.location.reload()">Finish Quiz</button>
      `
    };

    createQuiz(index)
}

function handleQuiz() {
    divQuizStart.style.display = "none"; // Esconde todos os elementos dentro da div pelo "none"
    btnQuestion.style.display = "block"; // Exibe devolta o Botão Submit - Dispara um evento de click - Function HandleNextQuestion
    userName = inputNameQuiz.value; // Resgata o valor do input do nome do Usuario
    createQuiz(index); // Criando o quiz, começando com a primeira pergunta - index = 0
}

function createRanking() {
    const newDataRanking = JSON.parse(localStorage.getItem("data-ranking"))
    newDataRanking.map(element => (divRankingQuiz.innerHTML += `
    <p>Name: ${element.userName}/ Score: ${element.score}</p>`));
};

window.addEventListener("load", () => {
    createCalendar();
    if (!dataRanking) {
        localStorage.setItem("data-ranking", JSON.stringify([]))
    }
    createRanking();
});

btnStartQuiz.addEventListener("click", handleQuiz);
btnQuestion.addEventListener("click", handleNextQuestion);
