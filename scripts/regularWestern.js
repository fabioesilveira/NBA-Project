import { createCalendar } from "./createCalendar.js";
import { createTable } from "./createTable.js";
import { westernRegularSeason } from "./data2.js";

const tableWestern = document.getElementById("tableWestern")
var dataWestern = localStorage.getItem("dataWestern");

function app() {
    if(!dataWestern){
        localStorage.setItem("dataWestern", JSON.stringify(westernRegularSeason))
    }

    const data = JSON.parse(localStorage.getItem("dataWestern"));

    createTable(data, tableWestern);
    createCalendar();
}


window.addEventListener("load", () => app());

