import { easternRegularSeason } from "./data2.js";

// const easternRegular = document.getElementById("easternRegular")
const tableEastern = document.getElementById("tableEastern")

// easternRegular.innerHTML += `
//     <table class="table">
//         <tr>
//             <th>Position</th>
//             <th>Team</th>
//             <th>W</th>
//             <th>L</th>
//         </tr>
//         <tbody>
//             ${easternRegularSeason.map(element => `
//                 <tr>
//                     <td>${element.id}</td>
//                     <td>${element.team}</td>
//                     <td>${element.w}</td>
//                     <td>${element.l}</td>
//                 </tr>
//             `).join(" ")}
//         </tbody>
//     </table>
// `

easternRegularSeason.map(element => tableEastern.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td>${element.team}</td>
        <td>${element.w}</td>
        <td>${element.l}</td>
    </tr>
`)