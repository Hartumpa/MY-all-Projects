let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];
let clickData = JSON.parse(localStorage.getItem("clickData")) || [];
let status = JSON.parse(localStorage.getItem("status")) || [];

if (status[0] == true) {
  if (clickData.page === "women") {
    window.location.href = "womens.html";
  } else {
    window.location.href = "mens.html";
  }
} else {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
      email: form.email.value,
      password: form.password.value,
    };

    if (form.email.value == "") {
      alert("Enter Email !");
    } else if (form.password.value == "") {
      alert("Enter Password !");
    } else{
      if (checkSignin(data.email, data.password) === true) {
        status.push(true);
        console.log(status);
        status.push(username(data));
        console.log(status)
  
        localStorage.setItem("signin", JSON.stringify(data));
        localStorage.setItem("status", JSON.stringify(status));
        alert("Sign in Successful");
        if (clickData.page === "women") {
          window.location.href = "womens.html";
        } else {
          window.location.href = "mens.html";
        }
      } else {
        alert("Wrong Username or Password");
      }
    }

  });
}

function checkSignin(email, password) {
  let filter = userData.filter(function (ele) {
    return ele.email === email && ele.password === password;
  });
  if (filter.length > 0) {
    return true;
  } else {
    return false;
  }
}

function username(data){
  for(let i=0;i<userData.length;i++){
   if(userData[i].email==data.email){
       return userData[i].name;
   }
  }
}
