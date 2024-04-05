import { createCalendar } from "./createCalendar.js";
import { questions } from "./data3.js";

const btnQuiz = document.getElementById("btn-quiz")
const divQuiz = document.getElementById("div-quiz")
const btnQuestion = document.getElementById("btn-question")
const divQuizP = document.getElementById("div-quiz-p")

window.addEventListener("load", () => {
    createCalendar();
});

var answer = false;
let score = 0
let index = 0

function createQuiz(index) {
    divQuiz.innerHTML = `
    <h3 class="d-flex justify-content-center question-history">${questions[index].q}</h3>
    <div>
    ${questions[index].a.map((e, i) => `
    <div class="options">
        <input  type="radio" id="question${i}" name="questions" value="${e.isCorrect}">
        <label  for="question${i}">${e.text}</label><br>   
    `).join("")} 
    </div>
    </div>
`
divQuiz.addEventListener("change", ({ target }) => {
    answer = target.value

});
}

function handleQuiz() {
    btnQuestion.style.display="block"
    createQuiz(index)
    divQuizP.style.display = "none"
    
}

btnQuiz.addEventListener("click", handleQuiz)
btnQuestion.addEventListener("click", () => {
    if (answer === "true") {
        score += 1
    }  

    console.log("resultado:", answer)
    console.log("pontos:",score)
    index += 1

    if (index + 1 > questions.length) {
      divQuizP.style.display = "block"
      divQuiz.style.display = "none"
      btnQuestion.style.display = "none"

      divQuizP.innerHTML = `
      <p>Congratulations, You've scored ${score}</p>
      <button class="btn btn-danger col-1 mx-auto mt-2 mb-2" onclick="window.location.reload()">Finish Quiz</button>
      `

         
    }
    
    createQuiz(index)
})

