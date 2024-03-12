export function createElement(array, div) {
    array.map(element =>  div.innerHTML += `
    <img class = "easternConference" src="${element.url}">
    <h3>${element.team}</h3>
    <p class="text-primary fw-bold">Stadium: ${element.stadium}</p>
    <p class="text-danger fw-bold">Starting Lineup: ${element.currentlyPlayers.map(e => " " + e)}</p>
    <p class="text-primary fw-bold">NBA titles: ${element.titles.nbaTitles}</p>
    <p class="text-danger fw-bold">Based: ${element.based}</p>
   `);       
}