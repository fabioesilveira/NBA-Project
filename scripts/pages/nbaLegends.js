import { createCalendar } from "../functions/createCalendar.js";
import { createNbaLegends } from "../functions/createLegends.js";
import { nbaLegends } from "../data/data4.js";

const nbaLegendsStars = document.getElementById("nbaLegends");
const inputSearch = document.getElementById("input-search");
const btnSearchLegend = document.getElementById("btn-search-legend");
console.log(inputSearch, btnSearchLegend);

function searchedLegend(event) {
  event.preventDefault();

  // normalize input
  const value = inputSearch.value.trim().toLowerCase();

  if (!value) {
    alert("Please type a legend name to search.");
    return;
  }

  // case-insensitive + partial match on name (and optionally team)
  const valueLegend = nbaLegends.filter((e) => {
    const name = String(e.name || "").toLowerCase();
    const team = String(e.team || "").toLowerCase(); // remove if you don't want team search

    return name.includes(value) || team.includes(value);
  });

  console.log(valueLegend);

  if (valueLegend.length > 0) {
    nbaLegendsStars.innerHTML = "";
    createNbaLegends(valueLegend, nbaLegendsStars);
  } else {
    alert("We couldn't find anything, please try again.");
  }
}

window.addEventListener("load", () => {
  createNbaLegends(nbaLegends, nbaLegendsStars);
  createCalendar();
});

btnSearchLegend.addEventListener("click", searchedLegend);
