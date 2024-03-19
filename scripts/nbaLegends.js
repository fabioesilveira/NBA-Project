import { createCalendar } from "./createCalendar.js";
import { createNbaLegends } from "./createLegends.js";
import { nbaLegends } from "./data4.js";


const nbaLegendsStars = document.getElementById("nbaLegends")
const inputSearch = document.getElementById("input-search")
const btnSearchLegend = document.getElementById("btn-search-legend")
console.log(inputSearch, btnSearchLegend)

function searchedLegend(event) {
    event.preventDefault();

    const value = inputSearch.value
    const valueLegend = nbaLegends.filter(e => e.name === value)
    console.log(valueLegend)
    if (valueLegend.length > 0) {

        nbaLegendsStars.innerHTML = ""

        createNbaLegends(valueLegend, nbaLegendsStars)
    }
    else {
        alert("We couldn't find anything, please try again.")
    }
}

window.addEventListener("load", () => {
    createNbaLegends(nbaLegends, nbaLegendsStars);
    createCalendar();
});

btnSearchLegend.addEventListener("click", searchedLegend)