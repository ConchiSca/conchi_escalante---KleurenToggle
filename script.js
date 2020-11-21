let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "280px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1"; 
        }

        toggleNavStatus = true;
    }


    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "50px";
        
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0"; 
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;

    }
    
}


const body = document.querySelector(".body");
const getSidebarUl = document.querySelector(".nav-sidebar ul");

const taupeLink = document.querySelector(".taupeLink");
const beigeLink = document.querySelector(".beigeLink");
const pinkLink = document.querySelector(".pinkLink");
const brownLink = document.querySelector(".brownLink");
const darkBlueLink = document.querySelector(".darkblueLink");

const makeBackgroundTaupe = () => {
    body.classList.remove("beige-background");
    body.classList.remove("pink-background");
    body.classList.remove("brown-background");
    body.classList.remove("darkblue-background");
    body.classList.add("taupe-background");
    getSidebarUl.style.visibility = "hidden";
    document.getElementById("color-description").innerHTML = "This is a taupe background";
}
    taupeLink.addEventListener("click", makeBackgroundTaupe);
    
    
const makeBackgroundBeige = () => {
    body.classList.remove("taupe-background");
    body.classList.remove("pink-background");
    body.classList.remove("brown-background");
    body.classList.remove("darkblue-background");
    body.classList.add("beige-background");
    getSidebarUl.style.visibility = "hidden";
    document.getElementById("color-description").innerHTML = "This is a beige background, isn't it?";
}
    beigeLink.addEventListener("click", makeBackgroundBeige);


const makeBackgroundPink = () => {
    body.classList.remove("taupe-background");
    body.classList.remove("beige-background");
    body.classList.remove("brown-background");
    body.classList.remove("darkblue-background");
    body.classList.add("pink-background");
    getSidebarUl.style.visibility = "hidden";
    document.getElementById("color-description").innerHTML = "This is a pinkish background";
}
    pinkLink.addEventListener("click", makeBackgroundPink);


const makeBackgroundBrown = () => {
    body.classList.remove("taupe-background");
    body.classList.remove("beige-background");
    body.classList.remove("pink-background");
    body.classList.remove("darkblue-background");
    body.classList.add("brown-background");
    getSidebarUl.style.visibility = "hidden";
    document.getElementById("color-description").innerHTML = "This is a brownish background";
}
    brownLink.addEventListener("click", makeBackgroundBrown);


const makeBackgroundDarkBlue = () => {
    getSidebarUl.style.visibility = "hidden";
    body.classList.remove("taupe-background");
    body.classList.remove("beige-background");
    body.classList.remove("pink-background");
    body.classList.remove("brown-background");
    body.classList.add("darkblue-background");
    
    document.getElementById("color-description").innerHTML = "This background is sort of greyish dark blue";
}
    darkBlueLink.addEventListener("click", makeBackgroundDarkBlue);

    