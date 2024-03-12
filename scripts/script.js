import { createCalendar } from "./createCalendar.js"
import { createElement } from "./createElement.js"
import { createTiers } from "./createTiers.js"
import { easternConference, westernConference, championships } from "./data.js"

const westernTeams = document.getElementById("westernTeams")
const easternTeams = document.getElementById("easternTeams")
const searchNav = document.getElementById("search-nav")
const nbaTiers = document.getElementById("tiers")

window.addEventListener("load", () => {
    createElement(easternConference, easternTeams);
    createElement(westernConference, westernTeams);
    createTiers(championships, nbaTiers);
    createCalendar();
})

searchNav.addEventListener("click", () => alert("Estou aqui"))



