let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let submit = document.getElementById("submit");
let rs = document.getElementById("rs");
let radio = document.getElementsByName("option");

submit.addEventListener("click", () => {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            switch (radio[i].value) {
                case "+":
                    rs.value = Number(num1.value) + Number(num2.value);
                    break;
                case "-":
                    rs.value = Number(num1.value) - Number(num2.value);
                    break;
                case "*":
                    rs.value = Number(num1.value) * Number(num2.value);
                    break;
                case "/":
                    if (Number(num2.value) == 0) {
                        alert("số thứ 2 không được = 0");
                    } else {
                        rs.value = Number(num1.value) / Number(num2.value);
                    }
            }
        }
    }
});
