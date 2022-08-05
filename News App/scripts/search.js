// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let items = JSON.parse(localStorage.getItem("items"));
let fromNews = JSON.parse(localStorage.getItem("fromNews"));
document.getElementById("search_input").addEventListener("keyup", (event) => {
    let query = document.getElementById("search_input").value;
    if (event.keyCode === 13) {
        search(query)
    }

})

import { show } from "../components/navbar.js"
let container = document.getElementById("results");
let search = async (query) => {
    if (query === "tesla" || query === "twitter") {
        const url = `https://masai-api.herokuapp.com/news?q=${query}`
        let res = await fetch(url);
        let data = await res.json()
        //console.log(data.articles)
        show(data.articles, container);
    }
}
search(items)
search(fromNews)



export { show }

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
