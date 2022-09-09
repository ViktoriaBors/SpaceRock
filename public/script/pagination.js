
export function loadPaginationNav(length, paginationWrapper,itemsOnPage ){
    let itemsPerPage = itemsOnPage
    paginationWrapper.innerHTML = ""
    for (let i = 0; i < length/itemsPerPage; i++){
        let li = document.createElement("li")
        li.classList.add("page-item")
        let a = document.createElement("a")
        a.innerHTML = i+1
        a.classList.add("page-link", "cursor-pointer", "relative", "block", "py-1.5", "px-3", "text-gray-700", "font-bold", "text-xs", "leading-tight", "rounded", "shadow-md", "bg-indigo-200", "hover:bg-indigo-400", "hover:shadow-lg")
        li.append(a)
        paginationWrapper.appendChild(li)
    }

}          