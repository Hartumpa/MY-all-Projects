document.querySelector("form").addEventListener("submit", data);
let arr = JSON.parse(localStorage.getItem("ram")) || [];
// display(arr); // method-1
window.addEventListener("load",function(){
  // console.log("page refreshed")
  display(arr);   //method -2
})


function data(e) {
  e.preventDefault();
  let obj = {
    que: document.querySelector("#title").value,
    link: document.querySelector("#link").value,
    level: document.querySelector("#difficulty").value,
  };
  arr.push(obj);
//   console.log(arr);
  display(arr);
  localStorage.setItem("ram",JSON.stringify(arr));
}


function display(arr){
    document.querySelector("tbody").innerHTML="";

    arr.forEach(function (e) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = e.que;
        let td2 = document.createElement("td");
        td2.innerText = e.link;
        let td3 = document.createElement("td");
        td3.innerText = e.level;
        let td4 = document.createElement("td");
        if(e.level=="Easy"){
            td4.innerText="No";
        }else{
            td4.innerText="Yes";
        }
        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);
      });
}
