let userNameInput = document.getElementById("userName");
let birthDayInput = document.getElementById("birthDay");
let btn = document.getElementById("submit");
let rs = document.getElementById("result");

btn.addEventListener("click",function(){
    if(userNameInput.value == '' || birthDayInput.value == '' || isNaN(Number( birthDayInput.value))){
        alert("Thông tin không hợp lệ!");
    } else{
        let userName = document.createElement("p");
        userName.innerHTML = `Chào bạn ${userNameInput.value}!`;
        rs.appendChild(userName)
        let age = document.createElement("p");
        age.innerHTML = `Tuổi của bạn là ${2023 - birthDayInput.value}`;
        rs.appendChild(age)
    }
})