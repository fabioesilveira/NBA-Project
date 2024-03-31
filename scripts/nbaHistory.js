import { createCalendar } from "./createCalendar.js";
import { questions } from "./data3.js";

const btnQuiz = document.getElementById("btn-quiz")
const divQuiz = document.getElementById("div-quiz")

window.addEventListener("load", () => {
    createCalendar();
});
let score = 0
btnQuiz.addEventListener("click", () => {
    
    var answer = false; 
    
    divQuiz.innerHTML = `
        <h3 class="d-flex justify-content-center question-history">${questions[1].q}</h3>
        <div class="panel">
        ${questions[1].a.map((e, i) => `
            <input  type="radio" id="question${i}" name="questions" value="${e.isCorrect}">
            <label  class="options" for="question${i}">${e.text}</label><br>   
        `).join("")}
        </div>
    `
    divQuiz.addEventListener("change", ({ target }) => {
        
        answer = target.value

        
        if (answer === "true") {
            score += 1
            console.log(answer)
        }
        
        console.log(score)
    })
    
})

