let chuoi1 = document.getElementById("chuoi1");
let chuoi2 = document.getElementById("chuoi2");
let chuoi3 = document.getElementById("chuoi3");
let chen = document.getElementById("chen");

function chuanHoaChuoi(chuoi) {
    let tmp = chuoi.trim();

    let tmpArr = tmp.split("");

    for (let i = 0; i < tmpArr.length; i++) {
        tmpArr[0] = tmpArr[0].toUpperCase();

        if (tmpArr[i] == " " && tmpArr[i + 1] == " ") {
            tmpArr.splice(i, 1);
        }

        if (tmpArr[i] == " " && tmpArr[i + 1] != " ") {
            tmpArr[i + 1] = tmpArr[i + 1].toUpperCase();
        }

        tmp = tmpArr.join("");
    }
    return tmp;
}

function chuanHoa() {
    chuoi1.value = chuanHoaChuoi(chuoi1.value);
    chuoi2.value = chuanHoaChuoi(chuoi2.value);
    chuoi3.value = chuanHoaChuoi(chuoi3.value);
}

function dao(chuoi) {
    let tmpArr = chuoi.split(" ");
    if (tmpArr.length <= 1) {
        return tmpArr.join("");
    } else {
        let rs = "";
        for (let i = tmpArr.length - 1; i >= 0; i--) {
            rs += tmpArr[i] + " ";
        }
        return rs;
    }
}

function daoChuoi() {
    chuoi1.value = dao(chuoi1.value);
    chuoi2.value = dao(chuoi2.value);
    chuoi3.value = dao(chuoi3.value);
}
