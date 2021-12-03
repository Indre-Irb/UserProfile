const menu = document.querySelectorAll(".menuButton")
const content1 = document.querySelector(".content1")
const content2 = document.querySelector(".content2")
const content3 = document.querySelector(".content3")
const content4 = document.querySelector(".content4")
const content5 = document.querySelector(".content5")


content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "none";
content5.style.display = "none";

menu[0].onclick = () => {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
}
menu[1].onclick = () => {
    content1.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
}
menu[2].onclick = () => {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "flex";
    content4.style.display = "none";
    content5.style.display = "none";
}
menu[3].onclick = () => {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "flex";
    content5.style.display = "none";
}
menu[4].onclick = () => {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "flex";
}

const workCards = document.querySelectorAll(".workCard")
const workModal = document.querySelector(".workModal")
const close = document.getElementsByClassName("close")[0]
const darkMode = document.querySelector(".darkMode")
const addDark = document.querySelectorAll(".addDark")


let change = false

workModal.style.display = "none";

workCards.forEach((x, index) => {
    x.onclick = () => {
        workModal.style.display = "flex";
    }
})

close.onclick = () => {
    workModal.style.display = "none";
}


darkMode.onclick = () => {
    changeColor()
}

function changeColor() {
    addDark.forEach(x => {
        if (!change) {
            document.body.style.background = "black"
            x.style.background = "rgb(91,90,90)"
            x.style.color = "lightgray"
            x.style.borderRadius = `10px/10px`
        } else {
            document.body.style.background = "rgba(229, 234, 234, 0.79)"
            x.style.background = "white"
            x.style.color = "#505050"
        }
    })
    change = !change
}


