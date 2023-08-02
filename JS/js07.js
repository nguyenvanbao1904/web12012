let submit = document.getElementById("submit");
let userName = document.getElementById("userName");

submit.addEventListener("click", function () {
    if (userName.value.length == 0) {
        alert("Ban chua nhap ten dang nhap");
    } else {
        alert("thanh cong");
    }
});
