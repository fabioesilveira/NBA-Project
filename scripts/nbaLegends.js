import { createCalendar } from "./createCalendar.js";
import { createNbaLegends } from "./createLegends.js";
import { nbaLegends } from "./data4.js";


const nbaLegendsStars = document.getElementById("nbaLegends")


window.addEventListener("load", () => {
    createNbaLegends (nbaLegends, nbaLegendsStars);
    createCalendar();
});
