import { createCalendar } from "./createCalendar.js";
import { questions } from "./data3.js";

const btnQuiz = document.getElementById("btn-quiz")
const divQuiz = document.getElementById("div-quiz")
const btnQuestion = document.getElementById("btn-question")

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
    
}

btnQuiz.addEventListener("click", handleQuiz)
btnQuestion.addEventListener("click", () => {
    if (answer === "true") {
        score += 1
    }  

    console.log("resultado:", answer)
    console.log("pontos:",score)
    index += 1
    
    createQuiz(index)
})

