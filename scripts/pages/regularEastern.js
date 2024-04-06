import { createCalendar } from "../functions/createCalendar.js";
import { createTable } from "../functions/createTable.js";
import { easternRegularSeason } from "../data/data2.js";

const tableEastern = document.getElementById("tableEastern")
var dataEastern = localStorage.getItem("dataEastern")

function app() {
    if(!dataEastern) {
        localStorage.setItem("dataEastern", JSON.stringify(easternRegularSeason))
    }

    const data = JSON.parse(localStorage.getItem("dataEastern"))

    createTable(data, tableEastern);
    createCalendar();
}


window.addEventListener("load", app());

