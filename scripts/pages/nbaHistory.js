import { createCalendar } from "../functions/createCalendar.js";
import { questions } from "../data/data3.js";

const btnStartQuiz = document.getElementById("btn-start-quiz");
const divQuiz = document.getElementById("div-quiz");
const btnSubmit = document.getElementById("btn-submit");
const divQuizStart = document.getElementById("div-quiz-start");
const inputNameQuiz = document.getElementById("input-name-quiz");
const divRankingQuiz = document.getElementById("div-ranking-users");

let dataRanking = localStorage.getItem("data-ranking");
let userName = "";
let answer = false;
let score = 0;
let index = 0; // Controlar as posições das perguntas - começa com 0 que é a primeira pergunta

function createQuiz(index) {
    // Criando os elementos dentro da div-quiz
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
    // verifica Se a resposta está correta
    if (answer === "true") {
        score += 1;
    };

    // next question
    index += 1;

    // verifica Se é a ultima pergunta do quiz
    if (index + 1 > questions.length) {
        divQuizStart.style.display = "block"; // deixa de ficar invisível
        divQuiz.style.display = "none"; // fica invisivel 
        btnSubmit.style.display = "none"; // fica invisivel

        // RESGATA o valor no localStorage
        dataRanking = JSON.parse(localStorage.getItem("data-ranking"));
        // Está colocando o resultado na variavel
        dataRanking.push({ userName, score });
        // Está enviando a variavel com o resultado para o localStorage
        localStorage.setItem("data-ranking", JSON.stringify(dataRanking));

        // Exibindo resultado na TELA dentro da div-quiz-start
        return divQuizStart.innerHTML = `
        <p class="text-center fw-bold">Congratulations 🎉, You've scored ${score} points of 10.</p>
        <button class="btn btn-danger col-1 mx-auto mt-2 mb-2 btn-finish" onclick="window.location.reload()">Finish Quiz</button>
      `
    };

    // Cria os elementos do quiz através da função
    return createQuiz(index);
}

function handleStartQuiz() {
    divQuizStart.style.display = "none"; // Esconde todos os elementos dentro da div pelo "none"
    userName = inputNameQuiz.value; // Resgata o valor do input do nome do Usuario

    // Verifica se está vazio;
    if (!userName.trim()) {
        alert('Enter name');
        return window.location.reload();
    };

    // Verificar se o nome do usário é realmente um nome válido

    createQuiz(index); // Criando o quiz, começando com a primeira pergunta - index = 0
    btnSubmit.style.display = "block"; // Exibe devolta o Botão Submit - Dispara um evento de click - Function HandleNextQuestion
};

function createRanking() {
    // Resgando o array dentro do LocalStorage
    const newDataRanking = JSON.parse(localStorage.getItem("data-ranking"));
    // Exibindo dentro da div-rakinging-quiz
    newDataRanking.map(element => (divRankingQuiz.innerHTML += `
        <p>Name: ${element.userName}/ Score: ${element.score}</p>
    `));
};

window.addEventListener("load", () => {
    createCalendar();
    if (!dataRanking) {
        localStorage.setItem("data-ranking", JSON.stringify([]))
    };

    createRanking();
});

btnStartQuiz.addEventListener("click", handleStartQuiz);
btnSubmit.addEventListener("click", handleNextQuestion);
