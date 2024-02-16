import { easternConference, westernConference } from "./data.js"


const easternTeams = document.getElementById("easternTeams")
for (const element of easternConference) {
   easternTeams.innerHTML += `
    <img class = "easternConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p>Stadium:${element.stadium}</p>
    <p>Players:${element.currentlyPlayers}</p>
    <p class="text-primary">NBA titles:${element.titles.nbaTitles}</p>
    <p>Year:${element.titles.championshipsWon}</p>
   `
}
console.log(easternTeams)

const westernTeams = document.getElementById("westernTeams")
for (const element of westernConference) {
    westernTeams.innerHTML += `
    <img class = "westernConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p>Stadium:${element.stadium}</p>
    <p>Players:${element.currentlyPlayers}</p>
    <p>NBA titles:${element.titles.nbaTitles}</p>
    <p>Year:${element.titles.championshipsWon}</p>
    `
    
}