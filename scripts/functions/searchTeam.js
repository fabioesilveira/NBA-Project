import { createElement } from "./createElement.js"


export function searchTeam(data, div, input) {
    const value = input.value
    
    const filterTeam = data.filter(e => e.team === value || e.stadium === value) 
    if (filterTeam.length > 0) {
        div.innerHTML = ""
        createElement(filterTeam, div)
        
    }
    else {
        alert("We couldn't find anything, please try again")
    }
   
};