const dropdownContent = document.getElementById("dropdown-content")
function dropdown() {
    const dropdownBtn = document.getElementById("dropdown-btn")
    
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

const dropdownContentFull = document.getElementById("dropdown-content-full")
function dropdownFull() {
    const dropdownBtn = document.getElementById("dropdown-btn-full")
    
    if(dropdownContent.style.opacity == 0) {
        dropdownBtn.classList.replace("im-angle-down", "im-angle-up")
        dropdownContentFull.style.opacity = 1
        dropdownContentFull.style.pointerEvents = "auto"
    } else if(dropdownContent.style.opacity == 1) {
        dropdownBtn.classList.replace("im-angle-up", "im-angle-down")
        dropdownContentFull.style.opacity = 0
        dropdownContentFull.style.pointerEvents = "none"
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

function showMessage() {
    const message = document.getElementById("message-container")
    message.style.display = "flex"

    setTimeout(() => {
        message.style.display = "none"
    }, 2800)
}

window.onload = () => {
    const message =
    `<div class="message-container" id="message-container">
        <div class="relative">
            <div class="absolute">
                <div class="message">
                    <i class="im im-clock"></i><p>Coming Soon!</p>
                </div>
            </div>
        </div>
    </div>`

    let messageObj = document.createElement("div")
    messageObj.innerHTML = message

    document.body.insertAdjacentElement("afterbegin", messageObj)

    const button = 
    `<div class="goToTop">
        <button class="im im-angle-up" id="mainGoToTop"></button>
    </div>`

    let buttonObj = document.createElement("div")
    buttonObj.id = "bruh"
    buttonObj.setAttribute("onclick", "goUp()")
    buttonObj.innerHTML = button

    document.body.insertAdjacentElement("afterbegin", buttonObj)

    btnDateChange()
}


window.onscroll = () => {
    const bruhButton = document.getElementById("bruh")

    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
        bruhButton.style.display = "block";
    } else {
        bruhButton.style.display = "none";
    }
}

function goUp() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

// window.addEventListener('load', () => {
//     dropdownContent.children.forEach(c => {
//         if(c.children.attributes[href].value === "") {
//             c.addEventListener('onclick', () => {
//                 alert("bruh")
//             })
//         }
//     });

//     console.log(dropdownContent.children)
//     console.log(dropdownContent.children[0].children[0].attributes);
//     console.log(dropdownContent.children[1].children[0].attributes);
// });