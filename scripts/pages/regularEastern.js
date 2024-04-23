import { createCalendar } from "../functions/createCalendar.js";
import { createTable } from "../functions/createTable.js";
import { easternRegularSeason } from "../data/data2.js";

const tableEastern = document.getElementById("tableEastern")
var dataEastern = localStorage.getItem("dataEastern")
const btnsChart = document.querySelectorAll(".btn-team")
const divCanvas = document.getElementById("div-canvas")
var ctx1;


function createChart(data) {
    var myChart = document.getElementById("myChart").getContext('2d');
    var statsChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels:["WINS", "LOSTS", "GAMES", "Points"],
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
    return statsChart
}


function app() {
    if(!dataEastern) {
        localStorage.setItem("dataEastern", JSON.stringify(easternRegularSeason))
    }

    const data = JSON.parse(localStorage.getItem("dataEastern"))
    const dataChartInit = [data[0].w, data[0].l, data[0].g]

    createTable(data, tableEastern);
    ctx1 = createChart(dataChartInit);
    createCalendar();
}


window.addEventListener("load", app());

btnsChart.forEach((e, i) => {
    e.addEventListener("click", () => {
        
    
        const data = JSON.parse(localStorage.getItem("dataEastern"))
        const dataChartInit = [data[i].w, data[i].l, data[i].g]
         
        ctx1.destroy()
        ctx1 = createChart(dataChartInit)
        

    
    })
    
});