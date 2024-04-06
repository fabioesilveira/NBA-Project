export function createElement(array, div) {
    array.map(element =>  div.innerHTML += `
    <img class = "easternConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p class="text-primary fw-bold fs-5">Stadium 🏟️</p><p class="fw-bold"> ${element.stadium}</p>
    <p class="text-danger fw-bold fs-5">Starting Lineup ⛹️⛹️⛹️⛹️⛹️</p><p class="fw-bold"> ${element.currentlyPlayers.map(e => " " + e)}</p>
    <p class="text-primary fw-bold fs-5">NBA titles 🏆</p><p class="fw-bold"> ${element.titles.nbaTitles}</p>
    <p class="text-primary fw-bold fs-6">Years Won 📅</p><p class="year-won"> ${element.titles.championshipsWon}</p>
    <p class="text-danger fw-bold fs-5">Based 📍</p><p class="fw-bold"> ${element.based}</p>
   
                                
   `);       
}