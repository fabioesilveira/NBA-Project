import { easternConference, westernConference } from "./data.js"

const westernTeams = document.getElementById("westernTeams")
const easternTeams = document.getElementById("easternTeams")
const searchNav = document.getElementById("search-nav")

for (const element of easternConference) {
   easternTeams.innerHTML += `
    <img class = "easternConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p class="text-primary">Stadium: ${element.stadium}</p>
    <p class="text-danger">Starting Lineup: ${element.currentlyPlayers.map(e => " " + e)}</p>
    <p class="text-primary">NBA titles: ${element.titles.nbaTitles}</p>
    <p class="text-danger">Based: ${element.based}</p>
   `
};

for (const element of westernConference) {
    westernTeams.innerHTML += `
    <img class = "westernConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p class="text-primary">Stadium: ${element.stadium}</p>
    <p class="text-danger">Starting Lineup: ${element.currentlyPlayers.map(e => " " + e)}</p>
    <p class="text-primary">NBA titles: ${element.titles.nbaTitles}</p>
    <p class="text-danger">Based: ${element.based}</p>
    `
    
};

searchNav.addEventListener("click", () => alert("Estou aqui"))



