function btnDateChange() {
    const contentDiv = document.getElementById("content")
    var date = new Date()
    var month = date.getMonth() + 1
    var year = date.getFullYear()

    if(month == 10 && year == 2021) {
        contentDiv.innerHTML += "<a href=PROJECTS/Q1 id=cta-btn><button class=main-cta-btn>Q1</button></a>"
    } else if(month == 11 || month == 12 && year == 2021) {
        contentDiv.innerHTML += "<a href=PROJECTS/Q2 id=cta-btn><button class=main-cta-btn>Q2</button></a>"
    } else if(month == 1 || month == 2 && year == 2022) {
        contentDiv.innerHTML += "<a href=PROJECTS/Q3 id=cta-btn><button class=main-cta-btn>Q3</button></a>"
    } else if(month >= 3 && month <= 5 && year == 2022) {
        contentDiv.innerHTML += "<a href=PROJECTS/Q4 id=cta-btn><button class=main-cta-btn>Q4</button></a>"
    } else {
        contentDiv.innerHTML += "<a href=PROJECTS id=cta-btn><button class=main-cta-btn>Projects</button></a>"
    }
}

// var mainForm = document.querySelector("#main-form");
// mainForm.addEventListener("submit", (e)=> {
//     e.preventDefault()
//     const form = e.target
//     var data = new FormData(form)

//     fetch(form.action, {
//         method: form.method,
//         body: data
//     }).then(
//         alert("Form Submitted")
//     )
// })