import { easternRegularSeason, westernRegularSeason } from "./data2.js";

const tableEastern = document.getElementById("tableEastern")

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

createTable(easternRegularSeason, tableEastern);



// DayJS
var today = dayjs();
$('#weekDay').text(today.format('MMMM D'));

var dayWeek = today.format('dddd,');
$('#currentDay').text(dayWeek);

var today = dayjs();


searchNav.addEventListener("click", () => alert("Estou aqui"))