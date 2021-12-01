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

menu[0].onclick=()=> {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
}
menu[1].onclick=()=> {
    content1.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
}
menu[2].onclick=()=> {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
    content4.style.display = "none";
    content5.style.display = "none";
}
menu[3].onclick=()=> {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "block";
    content5.style.display = "none";
}
menu[4].onclick=()=> {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "flex";
}
