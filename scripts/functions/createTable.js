export function createTable(array, table) {
    array.map((element, index) => table.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td><img class="easternConference2" src="${element.url}">${element.team}</td>
        <td>${element.w}</td>
        <td>${element.l}</td>
        <td>${element.g}</td>
    </tr>
`) 
}