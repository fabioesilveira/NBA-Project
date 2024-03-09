import { easternConference, westernConference, championships } from "./data.js"

const westernTeams = document.getElementById("westernTeams")
const easternTeams = document.getElementById("easternTeams")
const searchNav = document.getElementById("search-nav")
const nbaTiers = document.getElementById("tiers")

for (const element of easternConference) {
   easternTeams.innerHTML += `
    <img class = "easternConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p class="text-primary fw-bold">Stadium: ${element.stadium}</p>
    <p class="text-danger fw-bold">Starting Lineup: ${element.currentlyPlayers.map(e => " " + e)}</p>
    <p class="text-primary fw-bold">NBA titles: ${element.titles.nbaTitles}</p>
    <p class="text-danger fw-bold">Based: ${element.based}</p>
   `
};

for (const element of westernConference) {
    westernTeams.innerHTML += `
    <img class = "westernConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p class="text-primary fw-bold">Stadium: ${element.stadium}</p>
    <p class="text-danger fw-bold">Starting Lineup: ${element.currentlyPlayers.map(e => " " + e)}</p>
    <p class="text-primary fw-bold">NBA titles: ${element.titles.nbaTitles}</p>
    <p class="text-danger fw-bold">Based: ${element.based}</p>
    `
    
};

for (const element of championships) {
    nbaTiers.innerHTML += `
     
     <div class="fs-5 d-flex gap-1">
       ${
        element.url.map((e,i) => `
        <img class="westernConference3" src="${e}" >
        <p>${element.team[i]}</p>
        `).join(" ")
       }
       <p class="fw-bold">
       ${element.championships} <span>${element.emojis}</span>
       </p>
    </div>
   

    `
    
}


var today = dayjs();
$('#weekDay').text(today.format('MMMM D'));

var dayWeek = today.format('dddd,');
$('#currentDay').text(dayWeek);

var today = dayjs();


searchNav.addEventListener("click", () => alert("Estou aqui"))



