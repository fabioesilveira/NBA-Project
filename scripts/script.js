import { createTiers } from "./functions/createTiers.js";
import { dataEastern, dataWeastern, dataTiers } from "./data/data.js";
import { searchTeam } from "./functions/searchTeam.js";
import { createElement } from "./functions/createElement.js";
import { createCalendar } from "./functions/createCalendar.js";

const dataAllConferences = [...dataEastern, ...dataWeastern];
const divWeastern = document.getElementById("div-weastern");
const divEastern = document.getElementById("div-eastern");
const searchNav = document.getElementById("search-nav");
const divTiers = document.getElementById("div-tiers");
const searchTeamInput = document.getElementById("searchTeam");
const divSearch = document.getElementById("div-search");

window.addEventListener("load", () => {
  // render teams
  if (divEastern) createElement(dataEastern, divEastern);
  if (divWeastern) createElement(dataWeastern, divWeastern);

  // only run tiers where the div exists (e.g. history page)
  if (divTiers) createTiers(dataTiers, divTiers);

  // calendar in the footer
  createCalendar();
});

if (searchNav && searchTeamInput && divSearch) {
  searchNav.addEventListener("click", (event) => {
    event.preventDefault();
    searchTeam(dataAllConferences, divSearch, searchTeamInput);
  });
}

