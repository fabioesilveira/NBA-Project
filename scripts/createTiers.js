export function createTiers(array, div) {
    for (const element of array) {
        div.innerHTML += `
     
     <div class="fs-5 d-flex gap-1 teamConference3">
       ${element.url.map((e, i) => `
        <img class="westernConference3" src="${e}" >
        <p class="mt-3 teamConference3">${element.team[i]}</p>
        `).join(" ")
            }
       <p class="mt-3" fw-bold">
       ${element.championships} <span>${element.emojis}</span>
       </p>
    </div>
    `

    }

};