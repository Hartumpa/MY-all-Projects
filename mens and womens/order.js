        let total=JSON.parse(localStorage.getItem("total"));
        document.querySelector("#total").innerText=total;
        let form=document.querySelector("form");
        form.addEventListener("submit",processPayment);
        function processPayment(event){
            event.preventDefault();
            let name=document.querySelector("#name");
            let cardNum=document.querySelector("#cardNum");
            let expDate=document.querySelector("#expDate");
            let cvv=document.querySelector("#cvv");
            let sqCode=document.querySelector("#sqCode");
            if(name.value==""){
                alert("Enter Name");
            }else if(cardNum.value.length!=16){
                alert("Enter 16 Digit Card Number");
            }else if(expDate==""){
                alert("Choose Expiry Date of Card!");
            }else if(cvv.value.length!=3){
                alert("Enter 3 Digit CVV!")
            }else if(sqCode.value.length!=4){
                alert("Enter 4 Digit Security Code!");
            }else{
              
                window.location.href="otp.html"
            }


        }