import { createCalendar } from "./functions/createCalendar.js"
import { createElement } from "./functions/createElement.js"
import { createTiers } from "./functions/createTiers.js"
import { dataEastern, dataWeastern, dataTiers } from "./data/data.js"
import { searchTeam } from "./functions/searchTeam.js"


const dataAllConferences = [...dataEastern, ...dataWeastern]
const divWeastern = document.getElementById("div-weastern")
const divEastern = document.getElementById("div-eastern")
const searchNav = document.getElementById("search-nav")
const divTiers = document.getElementById("div-tiers")
const searchTeamInput = document.getElementById("searchTeam")
const divSearch = document.getElementById("div-search")




window.addEventListener("load", () => {
    createElement(dataEastern, divEastern);
    createElement(dataWeastern, divWeastern);
    createTiers(dataTiers, divTiers);
    createCalendar();
});

searchNav.addEventListener("click", (event) => {
    event.preventDefault()
    searchTeam(dataAllConferences, divSearch, searchTeamInput)
})



