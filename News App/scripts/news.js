// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("search_input").addEventListener("keyup", (event) => {
    let query = document.getElementById("search_input").value;
    if (event.keyCode === 13) {
        if (query === "tesla" || query === "twitter") {

            localStorage.setItem("fromNews", JSON.stringify(query));
            window.location.href = "search.html"
        }
    }

})

let data = JSON.parse(localStorage.getItem("news"))
console.log(data)


let newsDisplay = (data) => {
    let container = document.getElementById("detailed_news");
    container.innerHTML = "";
    let div = document.createElement("div")
    let img = document.createElement("img");
    img.src = data.urlToImage;

    let title = document.createElement("h3");
    title.innerText = data.title;

    let cont = document.createElement("p");
    cont.innerText = data.content;

    div.append(img, title, cont);
    container.append(div);
}
newsDisplay(data)
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "H".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "A".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "F".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }
};