import { createCalendar } from "../functions/createCalendar.js";
import { createTable } from "../functions/createTable.js";
import { easternRegularSeason, easternStatsRegSeason } from "../data/data2.js";

const tableEastern = document.getElementById("tableEastern");
let dataEastern = localStorage.getItem("dataEastern");
const btnsChart = document.querySelectorAll(".btn-team");
const divCanvas = document.getElementById("div-canvas");
let chartInit;

function createChart(data) {
    var myChart = document.getElementById("myChart").getContext('2d');
    var statsChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels:["POINTS", "3POINTS", "HOME WINS", "AWAY WINS"],
            datasets:[{
                label:'Regular Season',
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
    if(!dataEastern) {
        localStorage.setItem("dataEastern", JSON.stringify(easternRegularSeason))
    };

    const data = JSON.parse(localStorage.getItem("dataEastern"))
    const dataChartInit = [easternStatsRegSeason[0].points, easternStatsRegSeason[0].threePoints, easternStatsRegSeason[0].homeWins, easternStatsRegSeason[0].awayWins];

    createTable(data, tableEastern);
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