import { createCalendar } from "./createCalendar.js";
import { nbaLegends } from "./data4.js";


const nbaLegendsStars = document.getElementById("nbaLegends")

createCalendar();


function createNbaLegends(array, div) {
    array.map(element => div.innerHTML += `
     <img class = "legends-img" src="${element.url}">
     <h3>${element.name} ⭐</h3>
     <p>${element.biography}</p>
    `)
    
}

createNbaLegends (nbaLegends, nbaLegendsStars);