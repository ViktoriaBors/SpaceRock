// Templates to render card, form and modal.

export function render (obj, typeOfRender){
    let card = ""
    for (let data of obj){
       card += typeOfRender(data)
    }
    return card
}

export function renderCard (obj){
    let card = 
   `<div class="flex justify-center m-2">
    <div class="rounded-lg shadow-lg bg-white max-w-xs">
      <img class="rounded-t-lg" src="${obj.url}" alt="${obj.name}" />
      <div class="p-4 text-center">
        <h5 class="text-gray-900 text-md md:text-lg font-bold mb-2">${obj.name}</h5>
        <button type="button"  data-sampleId = ${obj._id} data-bs-toggle="modal" data-bs-target="#oneModalData"
          class="readMoreBtn inline-block px-6 py-2.5 bg-indigo-200 text-gray-700 font-bold text-xs leading-tight rounded shadow-md hover:bg-indigo-300 hover:shadow-lg active:bg-indigo-400 active:shadow-lg">Read More</button>
      </div>
    </div>
  </div>`
  return card
}

export function renderModal (obj){
    document.querySelector(".modalSampleName").innerText =  obj.name;
    
    if(obj.status == "pending"){
        document.querySelector(".modalSampleStatus").classList.remove("text-indigo-700")
        document.querySelector(".modalSampleStatus").classList.add("text-yellow-700")
    }
    else{
        document.querySelector(".modalSampleStatus").classList.remove("text-yellow-700")
        document.querySelector(".modalSampleStatus").classList.add("text-indigo-700")
    }
    document.querySelector(".modalSampleStatus").innerText =  obj.status;
    document.querySelector(".modalImg").src =  obj.url;
    document.querySelector(".modalImg").alt =  obj.name;
    document.querySelector(".modalDescription").innerText =  obj.description;
    document.querySelector(".modalMineral").innerText = obj.minerals;
    document.querySelector(".modalSiO").innerText = obj.SiO2;
    document.querySelector(".modalAlO").innerText = obj.Al2O3;
    document.querySelector(".modalMgO").innerText = obj.MgO;
    document.querySelector(".modalCaO").innerText = obj.CaO;
    document.querySelector(".modalNaO").innerText = obj.Na2O3;
    document.querySelector(".modalFeO").innerText = obj.Fe2O3;
    document.querySelector(".modalDensity").innerText = obj.density;
    document.querySelector(".modalPorosity").innerText = obj.porosity;
}

export function formCard (obj){
  let oneCard = `
  <!--One saved sample-->
  <div class="modifyForm block p-6 rounded-lg shadow-lg bg-white w-full">
      <button  class="modify w-full text-right text-3xl"> &#9998;</button>
      <form>
          <div class="form-group mb-1">
              <label for="materialName" class="form-label inline-block mb-2 text-gray-700">Name of the
                  material</label>
              <input type="text" disabled required value="${obj.name}"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                              focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  id="materialName" aria-describedby="materialName"> 
          </div>
          <p class="requiredField mb-5 px-1 text-xs text-red-700">The field is required</p>
          <div class="form-group mb-1">
              <label for="description" class="form-label inline-block mb-2 text-gray-700">Short description</label>
              <textarea disabled required 
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  id="description" rows="3" aria-describedby="description"> ${obj.description} </textarea>
          </div>
          <p class="requiredField mb-5 px-1 text-xs text-red-700">The field is required</p>
          <div class="form-group mb-1">
              <label for="minerals"  class="form-label inline-block mb-2 text-gray-700">Mineral composition</label>
              <textarea disabled required 
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                              focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
              id="minerals" aria-describedby="minerals"> ${obj.minerals} </textarea>
          </div>
          <p class="requiredField mb-5 px-1 text-xs text-red-700">The field is required</p>
          <p for="chemistry" class="form-label inline-block mb-2 text-gray-700">Geochemical composition</p>
          <div class="form-group mb-6">
              <div class="flex flex-row justify-around items-center">
                  <label for="siO" class="form-label inline-block mb-2 text-gray-700">SiO<sub>2</sub></label>
                  <input type="text" disabled value="${obj.SiO2}"
                      class="form-control inline px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                                                          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="siO" aria-describedby="siO">
              </div>
              <div class="flex flex-row justify-around items-center">
                  <label for="alO"
                      class="form-label inline-block mb-2 text-gray-700">Al<sub>2</sub>O<sub>3</sub></label>
                  <input type="text" disabled value="${obj.Al2O3}"
                      class="form-control inline px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                                                          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="alO" aria-describedby="alO">
              </div>
              <div class="flex flex-row justify-around items-center">
                  <label for="mgO" class="form-label inline-block mb-2 text-gray-700">MgO</label>
                  <input type="text" disabled value="${obj.MgO}"
                      class="form-control inline px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                                                          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="mgO" aria-describedby="mgO">
              </div>
              <div class="flex flex-row justify-around items-center">
                  <label for="caO" class="form-label inline-block mb-2 text-gray-700">CaO</label>
                  <input type="text" disabled value="${obj.CaO}"
                      class="form-control inline  px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                                                          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="caO" aria-describedby="caO">
              </div>
              <div class="flex flex-row justify-around items-center">
                  <label for="naO" class="form-label inline-block mb-2 text-gray-700">Na<sub>2</sub>O</label>
                  <input type="text" disabled value="${obj.Na2O3}"
                      class="form-control inline px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                                                          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="naO" aria-describedby="naO">
              </div>
              <div class="flex flex-row justify-around items-center">
                  <label for="feO"
                      class="form-label inline-block mb-2 text-gray-700">Fe<sub>2</sub>O<sub>3</sub></label>
                  <input type="text" disabled value="${obj.Fe2O3}"
                      class="form-control inline px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                                                          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="feO" aria-describedby="feO">
              </div>
          </div>
          <div class="form-group mb-6">
              <label for="density" class="form-label inline-block mb-2 text-gray-700">Density
                  (kg/m<sub>3</sub>)</label>
              <input type="text" disabled value="${obj.density}"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                              focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  id="density" aria-describedby="density">
          </div>
          <div class="form-group mb-6">
              <label for="porosity" class="form-label inline-block mb-2 text-gray-700">Porosity (%)</label>
              <input type="text" disabled value="${obj.porosity}"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded m-0
                                                              focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  id="porosity" aria-describedby="porosity">
          </div>
          <div  class="buttonForMod hidden flex flex-col md:flex-row ">
              <button id="saveMod" type="button" data-sampleId = "${obj._id}"
                  class=" w-full md:w-1/2 inline-block m-2 px-6 py-2.5 bg-yellow-500 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg active:bg-yellow-700 active:shadow-lg">
                  Save</button>
              <button id="delete" type="button" data-sampleId = "${obj._id}"
                  class=" w-full md:w-1/2 inline-block m-2 px-6 py-2.5 bg-red-500 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg active:bg-red-700 active:shadow-lg">
                  Delete</button>
          </div>
      </form>
  </div>
  `
  return oneCard
}


