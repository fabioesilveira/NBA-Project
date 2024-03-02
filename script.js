import { easternConference, westernConference } from "./data.js"

const westernTeams = document.getElementById("westernTeams")
const easternTeams = document.getElementById("easternTeams")
const searchNav = document.getElementById("search-nav")

for (const element of easternConference) {
   easternTeams.innerHTML += `
    <img class = "easternConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p>Stadium: ${element.stadium}</p>
    <p>Starting Lineup: ${element.currentlyPlayers.map(e => " " + e)}</p>
    <p class="text-primary">NBA titles: ${element.titles.nbaTitles}</p>
    <p>Based: ${element.based}</p>
   `
};

for (const element of westernConference) {
    westernTeams.innerHTML += `
    <img class = "westernConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p>Stadium: ${element.stadium}</p>
    <p>Starting Lineup: ${element.currentlyPlayers.map(e => " " + e)}</p>
    <p>NBA titles: ${element.titles.nbaTitles}</p>
    <p>Based: ${element.based}</p>
    `
    
};

searchNav.addEventListener("click", () => alert("Estou aqui"))



