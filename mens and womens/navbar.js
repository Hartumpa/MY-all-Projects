let clickMen=document.querySelector("#men");
clickMen.addEventListener("click",clickM);
let clickWomen=document.querySelector("#women");
clickWomen.addEventListener("click",clickW);
// console.log(clickMen.id);

function clickM(){
    let obj={};
    obj["page"]=clickMen.id;
    // console.log(obj)
    localStorage.setItem("clickData",JSON.stringify(obj));
    window.location.href="signin.html";
}
function clickW(){
    let obj={};
    obj["page"]=clickMen.id;
    // console.log(obj)
    localStorage.setItem("clickData",JSON.stringify(obj));
    window.location.href="signin.html";
}