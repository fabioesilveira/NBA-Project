import { createCalendar } from "../functions/createCalendar.js";
import { createTable } from "../functions/createTable.js";
import { easternRegularSeason, easternStatsRegSeason } from "../data/data2.js";

const tableEastern = document.getElementById("tableEastern");
let dataEastern = localStorage.getItem("dataEastern");
const btnsChart = document.querySelectorAll(".btn-team");
const selectHome = document.getElementById("select-home");
const selectAway = document.getElementById("select-away");
const inputHome = document.getElementById("input-home");
const inputAway = document.getElementById("input-away");
const btnSubmit = document.getElementById("btn-submit");
let chartInit;

function createChart(data) {
    const myChart = document.getElementById("myChart").getContext('2d');
    const statsChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: ["POINTS", "3POINTS", "HOME WINS", "AWAY WINS"],
            datasets: [{
                label: 'Regular Season',
                data,
                backgroundColor: 'rgb(36, 36, 142)',
                borderWidth: 3,
                borderColor: 'black',
                hoverBorderWidth: 4,
                hoverBorderColor: 'red'

            }]
        },
        options: {}
    });
    return statsChart;
};

function app() {
    if (!dataEastern) {
        localStorage.setItem("dataEastern", JSON.stringify(easternRegularSeason))
    };

    const data = JSON.parse(localStorage.getItem("dataEastern"))
    const dataChartInit = [easternStatsRegSeason[0].points, easternStatsRegSeason[0].threePoints, easternStatsRegSeason[0].homeWins, easternStatsRegSeason[0].awayWins];
    const dataRanking = data.sort((a, b) => b.w - a.w)
 console.log(dataRanking)
    createTable(dataRanking, tableEastern);
    chartInit = createChart(dataChartInit);
    createCalendar();
};

window.addEventListener("load", app());

btnsChart.forEach((e, i) => {
    e.addEventListener("click", () => {
        const dataChartInit = [easternStatsRegSeason[i].points, easternStatsRegSeason[i].threePoints, easternStatsRegSeason[i].homeWins, easternStatsRegSeason[i].awayWins];

        chartInit.destroy();
        chartInit = createChart(dataChartInit);
    });
});

btnSubmit.addEventListener("click", () => {
    console.log(inputHome.value, selectHome.value)
if (selectHome.value === selectAway.value) {
    return alert("Please, select different teams")
}
if (inputHome.value === inputAway.value) {
    return alert("Teams can't be tied up")
}
    const data = JSON.parse(localStorage.getItem("dataEastern"))
    data.forEach(element => {
        if (selectHome.value === element.team) {
            if (inputHome.value > inputAway.value) {
                element.g += 1;
                element.w += 1;
            } else {
                element.g += 1;
                element.l += 1;
            }
        };
        if (selectAway.value === element.team) {
            if (inputAway.value > inputHome.value) {
                element.g += 1;
                element.w += 1;
            } else {
                element.g += 1;
                element.l += 1;
            }
        }
    });
    localStorage.setItem("dataEastern", JSON.stringify(data))
    return window.location.reload()
})