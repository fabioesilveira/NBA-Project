import { createCalendar } from "./functions/createCalendar.js"
import { createElement } from "./functions/createElement.js"
import { createTiers } from "./functions/createTiers.js"
import { easternConference, westernConference, championships } from "./data/data.js"

const newData = [...easternConference, ...westernConference]
const westernTeams = document.getElementById("westernTeams")
const easternTeams = document.getElementById("easternTeams")
const searchNav = document.getElementById("search-nav")
const nbaTiers = document.getElementById("tiers")
const searchTeamInput = document.getElementById("searchTeam")
const searchedTeam = document.getElementById("div-search")


function searchTeam(event) {
    event.preventDefault()
    const value = searchTeamInput.value
    
    const filterTeam = newData.filter(e => e.team === value || e.stadium === value) 
    if (filterTeam.length > 0) {
        searchedTeam.innerHTML = ""
        createElement(filterTeam, searchedTeam)
        easternTeams.innerHTML = ""
        westernTeams.innerHTML = ""
    }
    else {
        alert("We couldn't find anything, please try again")
    }
   
};

window.addEventListener("load", () => {
    createElement(easternConference, easternTeams);
    createElement(westernConference, westernTeams);
    createTiers(championships, nbaTiers);
    createCalendar();
});

searchNav.addEventListener("click", searchTeam)



