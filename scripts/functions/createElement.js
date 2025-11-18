export function createElement(array, div) {
    div.innerHTML = ""; // clear before adding results

    array.forEach(element => {
        div.innerHTML += `
            <img class="easternConference" src="${element.url}">
            <h3>${element.team}</h3>
            <p class="text-primary fw-bold fs-5">Stadium 🏟️</p>
            <p class="fw-bold">${element.stadium}</p>

            <p class="text-primary fw-bold fs-5">NBA titles 🏆</p>
            <p class="fw-bold">${element.titles.nbaTitles}</p>

            <p class="text-danger fw-bold fs-5">Based 📍</p>
            <p class="fw-bold">${element.based}</p>
            <hr>
        `;
    });
}
