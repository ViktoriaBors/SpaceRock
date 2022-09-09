// Fetching data from server - functions to fetch and render pagination

//Import dom.js - buttons, checkboxes, divs where data loads
import { dom, input } from "./dom.js"
// template literals
import { renderCard, formCard, render } from "./templates.js"
// pagination
import { loadPaginationNav } from "./pagination.js"
// render details out
import { readMore, renderFormDetails } from "./renderDetails.js"

// database.html - search options
export function getDatasCard() {
  let searchWord = input.searchField.value.toLowerCase()

  fetch(`http://localhost:8080/data?word=${searchWord}&analogue=${input.searchAnalogue.checked}&simulant=${input.searchSimulant.checked}&approved=${input.searchApproved.checked}&pending=${input.searchPending.checked}&all=${input.allData.checked}&getlength=true`
  )
    .then(res => res.json())
    .then(dataLength => {
      if (dataLength == 0) {
        dom.cardsWrapper.innerText = "No sample found";
        dom.paginationContent.innerHTML = ""
        return
      }
      loadPaginationNav(dataLength, dom.paginationContent, 5)

      let pageIndex = 0;
      fetch(`http://localhost:8080/data?word=${searchWord}&analogue=${input.searchAnalogue.checked}&simulant=${input.searchSimulant.checked}&approved=${input.searchApproved.checked}&pending=${input.searchPending.checked}&all=${input.allData.checked}&page=${pageIndex}`
      ).then(res => res.json())
        .then(data => {
          dom.cardsWrapper.innerHTML = render(data, renderCard)
          readMore()
        })

      let page = document.querySelectorAll(".page-link")
      page[0].classList.remove("bg-indigo-200")
      page[0].classList.add("bg-white")
      for (let onePage of page) {
        onePage.addEventListener("click", () => {
          for (let aPage of page) {
            aPage.classList.remove("bg-white")
            aPage.classList.add("bg-indigo-200")
          }
          onePage.classList.remove("bg-indigo-200")
          onePage.classList.add("bg-white")

          pageIndex = onePage.innerText - 1
          fetch(`http://localhost:8080/data?word=${searchWord}&analogue=${input.searchAnalogue.checked}&simulant=${input.searchSimulant.checked}&approved=${input.searchApproved.checked}&pending=${input.searchPending.checked}&all=${input.allData.checked}&page=${pageIndex}`
          ).then(res => res.json())
            .then(data => {
              dom.cardsWrapper.innerHTML = render(data, renderCard)
              readMore()
            })
        })
      }
    })

}


export function getDatasForm() {
  let searchWord = input.searchFieldUser.value.toLowerCase()
  let alphabetic = input.alphabeticalBtn.checked
  let newest = input.newestBtn.checked
  let email = document.querySelector("#userEmail").innerText

  fetch(`http://localhost:8080/data/modify?word=${searchWord}&alphabetic=${alphabetic}&newest=${newest}&email=${email}&getlength=true`)
    .then(res => res.json())
    .then(dataLength => {
      if (dataLength == 0) {
        dom.savedSamplesDiv.innerText = "No sample found";
        dom.paginationContentUser.innerHTML = ""
        return
      }
      loadPaginationNav(dataLength, dom.paginationContentUser, 3)

      let pageIndex = 0;
      fetch(`http://localhost:8080/data/modify?word=${searchWord}&alphabetic=${alphabetic}&newest=${newest}&email=${email}&page=${pageIndex}`
      ).then(res => res.json())
        .then(data => {
          dom.savedSamplesDiv.innerHTML = render(data, formCard)
          renderFormDetails()
        })

      let page = document.querySelectorAll(".page-link")
      page[0].classList.remove("bg-indigo-200")
      page[0].classList.add("bg-white")
      for (let onePage of page) {
        onePage.addEventListener("click", () => {
          for (let aPage of page) {
            aPage.classList.remove("bg-white")
            aPage.classList.add("bg-indigo-200")
          }
          onePage.classList.remove("bg-indigo-200")
          onePage.classList.add("bg-white")

          pageIndex = onePage.innerText - 1
          fetch(`http://localhost:8080/data/modify?word=${searchWord}&alphabetic=${alphabetic}&newest=${newest}&email=${email}&page=${pageIndex}`
          ).then(res => res.json())
            .then(data => {
              dom.savedSamplesDiv.innerHTML = render(data, formCard)
              renderFormDetails()
            })
        })
      }
    })

  input.searchFieldUser.value = "";
  input.alphabeticalBtn.checked = false;
  input.newestBtn.checked = false;
}
