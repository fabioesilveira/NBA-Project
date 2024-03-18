import { createCalendar } from "./createCalendar.js";
import { nbaLegends } from "./data4.js";


const nbaLegendsStars = document.getElementById("nbaLegends")

createCalendar();


function createNbaLegends(array, div) {
    array.map(element => div.innerHTML += `
     <img class = "legends-img" src="${element.url}">
     <h2 class="legends-name">${element.name} ⭐</h2>
     <p>${element.biography}</p>
     <h4 class="text-primary fw-bold">Championships Won 🏆</h4>
     <p class="fw-bold">${element.championshipsWon.times}</p>
     <h5 class="text-primary fw-bold">Years Won  📅</h5>
     <p>${element.championshipsWon.years.map(e => " " + e)}</p>
     <h4 class="text-danger fw-bold">Teams Played for ⛹️</h4>
     <p class="fw-bold">${element.teamsPlayedfor.map(e => " " + e)}</p>
     <h4 class="text-primary fw-bold">Career End 🏀</h4>
     <p class="fw-bold">${element.careerEnd}</p>
    `)
    
}

createNbaLegends (nbaLegends, nbaLegendsStars);