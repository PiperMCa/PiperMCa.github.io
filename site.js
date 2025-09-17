

const h1 = document.querySelector('h1')
h1.style.border = "3px solid #000000"
h1.style.textAlign = "center"


document.body.style.backgroundColor = "#e0a0f7ff"
document.body.style.margin = "40px"
document.body.style.fontFamily = "Papyrus" 

const h2 = document.querySelectorAll("h2")
for (let i = 0; i < h2.length; i++) {
    h2[i].style.fontStyle = "italic"
}

const img = document.querySelector("img")
img.style.margin = "15px"
img.style.border = "4px dashed #ffffff"


const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const welcome = document.querySelector("div p")
if (isMorning) {
    welcome = "Top of the mornin to ya!"
}
else if (isAfternoon) {
    welcome.textContent = "Howdy, partner - it's a fine afternoon!"
}
else if (isEvening) {
    welcome.textContent = "Dusk salutations"
}
else {
    welcome.textContent = "error"
}
