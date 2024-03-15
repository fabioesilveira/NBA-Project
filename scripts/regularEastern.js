import { createCalendar } from "./createCalendar.js";
import { createTable } from "./createTable.js";
import { easternRegularSeason, westernRegularSeason } from "./data2.js";

const tableEastern = document.getElementById("tableEastern")



createTable(easternRegularSeason, tableEastern);
createCalendar();


searchNav.addEventListener("click", () => alert("Estou aqui"))