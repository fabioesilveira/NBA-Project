import { easternRegularSeason, westernRegularSeason } from "./data2.js";

const tableEastern = document.getElementById("tableEastern")
const tableWestern = document.getElementById("tableWestern")


easternRegularSeason.map(element => tableEastern.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td>${element.team}</td>
        <td>${element.w}</td>
        <td>${element.l}</td>
    </tr>
`)

westernRegularSeason.map(element => tableWestern.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td>${element.team}</td>
        <td>${element.w}</td>
        <td>${element.l}</td>
    </tr>
`)