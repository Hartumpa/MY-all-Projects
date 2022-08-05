// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar, sidebar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("sidebar").innerHTML = sidebar();

import { show, getData } from "../components/navbar.js"

let search = document.querySelector('#search_input');
console.log(search);
search.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
        if (search.value === "tesla" || search.value === "twitter") {

            let url = `search.html?q=${search.value}`;
            localStorage.setItem("items", JSON.stringify(search.value));
            window.location.href = url;
        }
    }
})

let container = document.getElementById("results");

let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`;
getData(url).then((res) => {
    show(res.articles, container);
})


let h2 = document.querySelectorAll("h2")
// console.log(h2[1])
for (let i = 0; i < h2.length; i++) {
    h2[i].addEventListener("click", () => {
        console.log(h2[i].id)
        const url = `https://masai-api.herokuapp.com/news/top-headlines?country=${h2[i].id}`;
        getData(url).then((res) => {
            show(res.articles, container)
        }).catch((err) => {
            console.log(err)
        })
    })
}



// document.addEventListener('contextmenu', event => event.preventDefault());
// document.onkeydown = function (e) {
//     if (event.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == "H".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == "A".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == "F".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//         return false;
//     }
// };


