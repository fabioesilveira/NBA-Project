import { createElement } from "./createElement.js"

export function searchTeam(data, div, input) {
    const value = input.value.trim().toLowerCase();  // normalized user input
    const searchCard = document.querySelector("#div-search");   // the card wrapper

    // If input is empty, hide the card and stop
    if (!value) {
        if (searchCard) {
            searchCard.style.display = "none";
            searchCard.innerHTML = "";   // optional: clear previous result
        }
        alert("Please type a team or stadium name.");
        return;
    }

    const filterTeam = data.filter((e) => {
        const team = String(e.team || "").toLowerCase();
        const stadium = String(e.stadium || "").toLowerCase();

        return team.includes(value) || stadium.includes(value);
    });

    if (filterTeam.length > 0) {
        div.innerHTML = "";
        createElement(filterTeam, div);

        // Show the card when we have results
        if (searchCard) {
            searchCard.style.display = "block";
        }
    } else {
        if (searchCard) {
            searchCard.style.display = "none";
            searchCard.innerHTML = "";
        }
        alert("We couldn't find anything, please try again");
    }
}
