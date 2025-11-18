import { createElement } from "./createElement.js"

export function searchTeam(data, div, input) {
    const value = input.value.trim().toLowerCase();  // normalized user input

    if (!value) {
        alert("Please type a team or stadium name.");
        return;
    }

    const filterTeam = data.filter((e) => {
        const team = String(e.team || "").toLowerCase();        // normalize
        const stadium = String(e.stadium || "").toLowerCase();  // normalize

        return team.includes(value) || stadium.includes(value);
    });

    if (filterTeam.length > 0) {
        div.innerHTML = "";
        createElement(filterTeam, div);
    } else {
        alert("We couldn't find anything, please try again");
    }
}
