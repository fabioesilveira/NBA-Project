import { createCalendar } from "./createCalendar.js";
import { createTable } from "./createTable.js";
import { easternRegularSeason, westernRegularSeason } from "./data2.js";

const tableWestern = document.getElementById("tableWestern")


window.addEventListener("load", () => {
    createTable(westernRegularSeason, tableWestern);
    createCalendar();
});

searchNav.addEventListener("click", () => alert("Estou aqui"))