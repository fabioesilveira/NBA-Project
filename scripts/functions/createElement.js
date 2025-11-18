export function createElement(array, div) {
    div.innerHTML = ""; // clear before adding results

    const isSearchCard = div.id === "div-search"; // only true for the top search card

    array.forEach((element) => {
        // Safely format years won
        let yearsWon = "—";
        if (Array.isArray(element.titles?.championshipsWon)) {
            yearsWon = element.titles.championshipsWon.join(", ");
        } else if (element.titles?.championshipsWon) {
            yearsWon = element.titles.championshipsWon;
        }

        // Safely format current players
        const currentPlayersText = Array.isArray(element.currentlyPlayers)
            ? element.currentlyPlayers.join(", ")
            : "Not available";

        div.innerHTML += `
            <img class="easternConference" src="${element.url}">
            <h3>${element.team}</h3>
            
            <p class="text-primary fw-bold fs-5">Stadium 🏟️</p>
            <p class="fw-bold">${element.stadium}</p>

            <p class="text-primary fw-bold fs-5">NBA titles 🏆</p>
            <p class="fw-bold">${element.titles.nbaTitles}</p>

            <p class="text-danger fw-bold fs-5">Based 📍</p>
            <p class="fw-bold">${element.based}</p>

            ${
                isSearchCard
                    ? `
            <p class="text-primary fw-bold fs-5">Starting Lineup ⛹️</p>
            <p class="fw-bold">${currentPlayersText}</p>

            <p class="text-primary fw-bold fs-5">Championship Years 📅</p>
            <p class="fw-bold">${yearsWon}</p>
            `
                    : ""
            }

            <hr>
        `;
    });
}
