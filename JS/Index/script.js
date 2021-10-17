function btnDateChange() {
    const ctaBtn = document.getElementById("cta-btn")
    var date = new Date()
    var month = date.getMonth() + 1
    var year = date.getFullYear()

    if(month == 10 && year == 2021) {
        ctaBtn.innerHTML += "<a href=PROJECTS/Q1><button class=main-cta-btn>Q1</button></a>"
    } else if(month == 11 || month == 12 && year == 2021) {
        ctaBtn.innerHTML += "<a href=PROJECTS/Q2><button class=main-cta-btn>Q2</button></a>"
    } else if(month == 1 || month == 2 && year == 2022) {
        ctaBtn.innerHTML += "<a href=PROJECTS/Q3><button class=main-cta-btn>Q3</button></a>"
    } else if(month >= 3 && month <= 5 && year == 2022) {
        ctaBtn.innerHTML += "<a href=PROJECTS/Q4><button class=main-cta-btn>Q4</button></a>"
    } else {
        ctaBtn.innerHTML += "<a href=PROJECTS><button class=main-cta-btn>Projects</button></a>"
    }
}