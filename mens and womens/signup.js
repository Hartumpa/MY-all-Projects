let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
  };
  if (form.email.value == "") {
    alert("Enter Email !");
  } else if (form.password.value == "") {
    alert("Enter Password !");
  }else if(form.name.value==""){
    alert("Enter Name !")
  }else{
    if (checkEmails(data.email) === true) {
      userData.push(data);
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Sign Up Successful !");
    } else {
      alert("Account already exists !");
    }
  }

});

function checkEmails(email) {
  let filtered = userData.filter(function (ele) {
    return email === ele.email;
  });
  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}
