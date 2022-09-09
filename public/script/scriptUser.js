//Import dom.js - buttons, checkboxes, divs where data loads
import {dom, input} from "./dom.js"
// oop
import { Sample } from "./oop.js"
// fetch
import { getDatasForm } from "./getdata.js";
// remove white spaces
import { removeWhiteSpaces } from "./renderDetails.js"


//See the user has a session
fetch(`http://localhost:8080/user`,{
    credentials: 'include'
}).then(res => {
    if(!res.ok){
        throw new Error("error")
    } else return res.json()
}). then(data => {
    document.querySelector("#userWelcome").innerText = data.firstname + " " +data.lastname
    document.querySelector("#userEmail").innerText = data.email
})
.catch(error =>{
    console.log(error)
    swal({
        title: "Error",
        text: "Access Denied",
        icon: "error",
    })
    setTimeout(()=>{
        window.open("http://localhost:8080/contact", "_self")
      }, 1000)
})


//// search for pending samples to modify or delete
input.searchFieldUser.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        dom.searchBtnUser.onclick = getDatasForm()
    }        
})
dom.searchBtnUser.addEventListener("click", getDatasForm)


//////////// add new sample ///////////
dom.submitSample.addEventListener("click", function () {
    let requiredFields = input.submitNewMaterial.querySelectorAll(".requiredField")
    if(removeWhiteSpaces(input.materialNameNew.value) == "" ||
    removeWhiteSpaces(input.descriptionNew.value) == "" ||
    removeWhiteSpaces(input.mineralsNew.value) ==""
    ){        
        for (let oneField of requiredFields){
            oneField.classList.add("font-semibold")
        }
        return
    }
    let newSample = new Sample (
        removeWhiteSpaces(input.materialNameNew.value),
        "simulant",
        removeWhiteSpaces(input.descriptionNew.value),
        removeWhiteSpaces(input.mineralsNew.value),
        input.siONew.value,
        input.alONew.value,
        input.mgONew.value,
        input.caONew.value,
        input.naONew.value,
        input.feONew.value,
        input.densityNew.value,
        input.porosityNew.value, 
        document.querySelector("#userEmail").innerText,
   )   

   fetch(`http://localhost:8080/data`, {
    method: 'POST',
    headers: {
        "content-type": "application/json",
      },
    body: JSON.stringify(newSample)
    })
    .then(res => {
        if(!res.ok){
            throw new Error("error")
        }
        return res.text()
    } )
    .then(data => {
        swal({
            title: "Success",
            text: "New sample is added",
            icon: "success",
          });
    })
    .catch(error => {
        console.log(error)
        swal({
            title: "Error",
            text: "Already existing sample name",
            icon: "error",
        });
    })

    //reset form after
    input.submitNewMaterial.reset()
    for (let oneField of requiredFields){
        oneField.classList.remove("font-semibold")
    }
})

///////// Add new IMG ///////
dom.submitImgBtn.addEventListener("click", ()=>{
    console.log("img")
    let sampleName = document.querySelector("#submitImgForm #materialName").value
    let file = document.querySelector("#imgUpload").files[0]
    let email = document.querySelector("#userEmail").innerText
    console.log(sampleName, file)
    if(sampleName == undefined || file == undefined){
      document.querySelector("#submitImgForm #requiredField").classList.add("font-semibold")
      return
    }

    let fileForm = new FormData()
    fileForm.append("sampleName", sampleName)
    fileForm.append("img", file)
    fileForm.append("email", email)

    fetch(`http://localhost:8080/data/file`, {
    method: 'POST',
    body: fileForm
    }).then(res => {
        if(!res.ok){
            throw new Error("error")
        }
        return res.text()
    } )
    .then(data => {
        swal({
            title: "Success",
            text: "New image is added",
            icon: "success",
          });
    })
    .catch(error => {
        console.log(error)
        swal({
            title: "Error",
            text: "No sample found",
            icon: "error",
        })
    })

    document.querySelector("#submitImgForm").reset()
    document.querySelector("#submitImgForm #requiredField").classList.remove("font-semibold")
    
})

//////////  Log out //////////
dom.logoutBtn.addEventListener("click", ()=>{
    fetch(`http://localhost:8080/user/logout`)
    .then(res => {
        if(!res.ok){
            throw new Error("error")
        } 
        return res.text()
    })
    .then(data => {
        swal({
            title: "Success",
            text: "You are logged out",
            icon: "success",
        })
        setTimeout(() => {
            window.open("http://localhost:8080/index", "_self")
        }, 1000)
    })
})

