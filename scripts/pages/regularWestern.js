import { createCalendar } from "../functions/createCalendar.js";
import { createTable } from "../functions/createTable.js";
import { westernRegularSeason, westernStatsRegSeason } from "../data/data2.js";

const tableWestern = document.getElementById("tableWestern");
var dataWestern = localStorage.getItem("dataWestern");
const btnsChart = document.querySelectorAll(".btn-team");
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
    if(!dataWestern){
        localStorage.setItem("dataWestern", JSON.stringify(westernRegularSeason))
    }

    const data = JSON.parse(localStorage.getItem("dataWestern"));
    const dataChartInit = [westernStatsRegSeason[0].points, westernStatsRegSeason[0].threePoints, westernStatsRegSeason[0].homeWins, westernStatsRegSeason[0].awayWins];

    createTable(data, tableWestern);
    chartInit = createChart(dataChartInit);
    createCalendar();
}

window.addEventListener("load", app());

btnsChart.forEach((e, i) => {
    e.addEventListener("click", () => {
        const dataChartInit = [westernStatsRegSeason[i].points, westernStatsRegSeason[i].threePoints, westernStatsRegSeason[i].homeWins, westernStatsRegSeason[i].awayWins];

        chartInit.destroy();
        chartInit = createChart(dataChartInit);
    });
});


