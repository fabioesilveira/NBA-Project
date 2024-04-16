import { createCalendar } from "../functions/createCalendar.js";
import { createTable } from "../functions/createTable.js";
import { easternRegularSeason } from "../data/data2.js";

const tableEastern = document.getElementById("tableEastern")
var dataEastern = localStorage.getItem("dataEastern")
const myChart = document.getElementById("myChart").getContext('2d');

const statsChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels:["WINS", "LOSTS", "GAMES"],
        datasets:[{
            label:'Regular Season',
            data:[60, 20, 82],
            backgroundColor: 'rgb(36, 36, 142)',
            borderWidth: 3,
            borderColor: 'black',
            hoverBorderWidth: 4,
            hoverBorderColor: 'red'

        }]
    },
    options: {}
});


function app() {
    if(!dataEastern) {
        localStorage.setItem("dataEastern", JSON.stringify(easternRegularSeason))
    }

    const data = JSON.parse(localStorage.getItem("dataEastern"))

    createTable(data, tableEastern);
    createCalendar();
}


window.addEventListener("load", app());

