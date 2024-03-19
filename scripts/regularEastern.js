import { createCalendar } from "./createCalendar.js";
import { createTable } from "./createTable.js";
import { easternRegularSeason, westernRegularSeason } from "./data2.js";

const tableEastern = document.getElementById("tableEastern")


window.addEventListener("load", () => {
    createTable(easternRegularSeason, tableEastern);
    createCalendar();
});

searchNav.addEventListener("click", () => alert("Estou aqui"))