let userName = document.getElementById("userName");
let submit = document.getElementById("submit");
let date = document.getElementById("date");
let reset = document.getElementById("reset");

submit.addEventListener("click", () => {
    if (userName.value == "") {
        alert("Ten dang nhap khong duoc de trong");
    }
    if (date.value == "") {
        alert("Ngay sinh khong duoc de trong");
    }
});

