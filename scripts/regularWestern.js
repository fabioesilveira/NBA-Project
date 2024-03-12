import { createCalendar } from "./createCalendar.js";
import { easternRegularSeason, westernRegularSeason } from "./data2.js";

const tableWestern = document.getElementById("tableWestern")

function createTable(array, table) {
    array.map(element => table.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td><img class="easternConference2" src="${element.url}">${element.team}</td>
        <td>${element.w}</td>
        <td>${element.l}</td>
    </tr>
`) 
}

createTable(westernRegularSeason, tableWestern);
createCalendar();


searchNav.addEventListener("click", () => alert("Estou aqui"))