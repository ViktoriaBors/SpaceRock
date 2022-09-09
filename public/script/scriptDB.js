//Import dom.js - buttons, checkboxes, divs where data loads
import {dom, input} from "./dom.js"
import {getDatasCard} from "./getdata.js"


////// Reset search option in database.html /////////
dom.resetBtn.addEventListener("click", function(){
    input.searchField.value = "";
    input.searchAnalogue.checked = false;
    input.searchSimulant.checked = false;
    input.searchApproved.checked = false;
    input.searchPending.checked = false;
    input.allData.checked = false;
    dom.cardsWrapper.innerHTML = "";
    dom.paginationContent.innerHTML = ""
})

/////// Search in database - database.html //////////
input.searchField.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        dom.searchBtn.onclick = getDatasCard()
    }        
})
dom.searchBtn.addEventListener("click", getDatasCard)




