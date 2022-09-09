// Rendering details after fetching data from server
// Sample search, modification and adding functions

//Import dom.js - buttons, checkboxes, divs where data loads
import { dom, input } from "./dom.js"
// template literals
import { renderModal, formCard } from "./templates.js"
// oop
import { Sample } from "./oop.js"

export function readMore() {
    // Read More about the sample - database.html
    let readMoreBtn = document.querySelectorAll(".readMoreBtn")
    for (let readMore of readMoreBtn) {
        readMore.addEventListener("click", function (event) {
            let id = event.target.dataset.sampleid
            fetch(`http://localhost:8080/data/${id}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Error")
                    }
                    return res.json()
                })
                .then(data => renderModal(data))
                .catch(error => {
                    console.log(error)
                    swal({
                        title: "Error",
                        text: "Cannot found the specific sample",
                        icon: "error",
                    });
                })
        })
    }
}

export function renderFormDetails() {
    /// click on pen to modify ///
    let modifyForm = document.querySelectorAll(".modifyForm")
    for (let i = 0; i < modifyForm.length; i++) {
        modifyForm[i].addEventListener("click", function (event) {
            // pen
            if (event.target.classList.contains("modify")) { // just if we click on the pen
                let buttonDivforMod = document.querySelectorAll(".buttonForMod")
                buttonDivforMod[i].classList.toggle("hidden") // buttons save and delete appears
                let inputFields = event.target.nextElementSibling.querySelectorAll("input, textarea") // all the input fields in the form become enabled and change bgColor
                for (let j = 0; j < inputFields.length; j++) {
                    inputFields[j].toggleAttribute("disabled");
                    inputFields[j].classList.toggle("bg-gray-200");
                }
            }
            /// Delete sample 
            if (event.target.id == "delete") {
                let sampleid = (event.target.dataset.sampleid)
                fetch(`http://localhost:8080/data/${sampleid}`, {
                    method: 'delete',
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("error")
                        }
                        return res.text()
                    })
                    .then(data => {
                        swal({
                            title: "Success",
                            text: "The sample is deleted",
                            icon: "success",
                        });
                    })
                    .catch(error => {
                        console.log(error)
                        swal({
                            title: "Error",
                            text: "Something went wrong",
                            icon: "error",
                        });
                    })
                dom.savedSamplesDiv.innerHTML = "";
                dom.paginationContentUser.innerHTML = ""
            }

            //// Update sample
            if (event.target.id == "saveMod") {
                if (removeWhiteSpaces(document.querySelector("#materialName").value) == "" ||
                    removeWhiteSpaces(document.querySelector("#description").value) == "" ||
                    removeWhiteSpaces(document.querySelector("#minerals").value) == ""
                ) {
                    let requiredFields = modifyForm[i].querySelectorAll(".requiredField")
                    for (let oneField of requiredFields) {
                        oneField.classList.add("font-semibold")
                    }
                    return
                }

                let updatedSample = new Sample(
                    removeWhiteSpaces(modifyForm[i].querySelector("#materialName").value),
                    "simulant",
                    removeWhiteSpaces(modifyForm[i].querySelector("#description").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#minerals").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#siO").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#alO").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#mgO").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#caO").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#naO").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#feO").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#density").value),
                    removeWhiteSpaces(modifyForm[i].querySelector("#porosity").value),
                    document.querySelector("#userEmail").innerText,
                )

                let sampleid = (event.target.dataset.sampleid)
                fetch(`http://localhost:8080/data/${sampleid}`, {
                    method: 'PUT',
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedSample)
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("error")
                        }
                        return res.json()
                    })
                    .then(data => {
                        dom.savedSamplesDiv.innerHTML = formCard(data)
                        swal({
                            title: "Success",
                            text: "The sample is updated",
                            icon: "success",
                        });
                    })
                    .catch(error => {
                        console.log(error)
                        swal({
                            title: "Error",
                            text: "Something went wrong",
                            icon: "error",
                        });
                    })
            }
        })
    }
}

export function removeWhiteSpaces(document) {
    return document = document.replace(/\s+/g, ' ').trim();
}

