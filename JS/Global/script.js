function dropdown() {
    const dropdownBtn = document.getElementById("dropdown-btn")
    const dropdownContent = document.getElementById("dropdown-content")
    
    if(dropdownContent.style.opacity == 0) {
        dropdownBtn.classList.replace("im-angle-down", "im-angle-up")
        dropdownContent.style.opacity = 1
        dropdownContent.style.pointerEvents = "auto"
    } else if(dropdownContent.style.opacity == 1) {
        dropdownBtn.classList.replace("im-angle-up", "im-angle-down")
        dropdownContent.style.opacity = 0
        dropdownContent.style.pointerEvents = "none"
    }
}

function dropdownFull() {
    const dropdownBtn = document.getElementById("dropdown-btn-full")
    const dropdownContent = document.getElementById("dropdown-content-full")
    
    if(dropdownContent.style.opacity == 0) {
        dropdownBtn.classList.replace("im-angle-down", "im-angle-up")
        dropdownContent.style.opacity = 1
        dropdownContent.style.pointerEvents = "auto"
    } else if(dropdownContent.style.opacity == 1) {
        dropdownBtn.classList.replace("im-angle-up", "im-angle-down")
        dropdownContent.style.opacity = 0
        dropdownContent.style.pointerEvents = "none"
    }
}

function hamburgNav() {
    const hamburgBtn = document.getElementById("hamburg-btn")
    const fullsizeNav = document.getElementById("fullsize-nav")

    if(hamburgBtn.classList[1] == "im-menu") {
        hamburgBtn.classList.replace("im-menu", "im-x-mark")
        fullsizeNav.style.display = "flex"
    } else if(hamburgBtn.classList[1] == "im-x-mark") {
        hamburgBtn.classList.replace("im-x-mark", "im-menu")
        fullsizeNav.style.display = "none"
    }
}

window.addEventListener('load', () => {
    const dropdownContent = document.getElementById("dropdown-content")
    console.log(dropdownContent.children[0].children[0].attributes);
    console.log(dropdownContent.children[1].children[0].attributes);
});