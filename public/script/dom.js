export const dom = {
///// Buttons  ///
// search database.html
    searchBtn : document.querySelector("#searchBtn"),
// resetBtn database.html
    resetBtn : document.querySelector("#resetBtn"),
// load more btn database.html ???????????
    loadMoreBtn : document.querySelector("#loadBtn"),


// register new user contact.html ????????
    registerBtn : document.querySelector("#register"),

//sign in contact.html
    signBtn : document.querySelector("#signIn"),


// searchBtn user.html
    searchBtnUser : document.querySelector("#searchSavedBtn"),

//save and delete btn after click to modify btn user.html
    saveModBtn :  document.querySelector("#saveMod"),
    deleteBtn : document.querySelector("#delete"),
// load more btn user.html
    loadMoreUserBtn : document.querySelector("#loadBtnUser"),
// add new sample user.html
    submitSample : document.querySelector("#submitNew"),
    submitImgBtn : document.querySelector("#submitImgBtn"),

// logout button
    logoutBtn : document.querySelector("#logout"),


/// divs - where data gonna load to ///
// database.html - cards gonna load
    cardsWrapper : document.querySelector("#cardsWrapper"),
// database.html modalSearch 
    modalSearch : document.querySelector("#modalSearch"),
// database.html - pagination DIV
    paginationContent: document.querySelector("#paginationContent"),

// user.html - form-data load to
    savedSamplesDiv : document.querySelector("#savedSamples"),
// user.html - pagination DIV
    paginationContentUser: document.querySelector("#paginationContentUser"),
}

export const input ={
    // database.html - search
    searchField : document.querySelector("#searchField"),
    // database.html checkboxes for search option
    searchAnalogue : document.querySelector("#analogue"),
    searchSimulant : document.querySelector("#simulant"),
    searchApproved : document.querySelector("#approved"),
    searchPending : document.querySelector("#pending"),
    allData : document.querySelector("#allData"),


    // contact.html register ????????????
    firstName : document.querySelector("#firstName"),
    lastName : document.querySelector("#lastName"),
    emailRegister : document.querySelector("#emailReg"),
    passwordRegister : document.querySelector("#passwordReg"),

    // contact.html login
    emailSign : document.querySelector("#emailSign"),
    passwordSign : document.querySelector("#passwordSign"),


    // user.html - search
    searchFieldUser : document.querySelector("#searchFieldUser"),
    // user.html checkboxes for sorting
    alphabeticalBtn : document.querySelector("#alphabetical"),
    newestBtn : document.querySelector("#newest"),

    // user.html - form for NEW MATERIALS
    materialNameNew : document.querySelector("#materialNameNew"),
    descriptionNew : document.querySelector("#descriptionNew"),
    mineralsNew : document.querySelector("#mineralsNew"),
    siONew : document.querySelector("#siONew"),
    alONew : document.querySelector("#alONew"),
    mgONew : document.querySelector("#mgONew"),
    caONew : document.querySelector("#caONew"),
    naONew : document.querySelector("#naONew"),
    feONew : document.querySelector("#feONew"),
    densityNew : document.querySelector("#densityNew"),
    porosityNew : document.querySelector("#porosityNew"), 

    // whole forms from user.html
    submitNewMaterial : document.querySelector("#submitNewMaterial"),
    // whole forms from contact.html
    loginForm : document.querySelector("#logInForm"),
    registerForm : document.querySelector("#registerForm"),

    // register form fields
    firstName : document.querySelector("#firstName"),
    lastName : document.querySelector("#lastName"),
    emailReg : document.querySelector("#emailReg"),
    passwordReg : document.querySelector("#passwordReg"),
    // login form fields
    emailSign : document.querySelector("#emailSign"),
    passwordSign : document.querySelector("#passwordSign"),
}

