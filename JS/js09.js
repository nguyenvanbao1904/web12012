let input = document.getElementById("input");
let rs = document.getElementById("rs");

let stringRs = "";

const createArr = () => {
    let randomArr = new Array(Number(input.value));

    for (let i = 0; i < Number(input.value); i++) {
        randomArr[i] = Math.floor(Math.random() * 51);
    }
    let arrString = randomArr.join("    ");
    let Arr = document.createElement("p");
    Arr.innerText = `Mảng ban đầu: ${arrString}`;
    rs.appendChild(Arr);
    stringRs = arrString;
};

const sortUp = () => {
    let tmpArr = stringRs.split("    ");

    for (let i = 0; i < tmpArr - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (tmpArr[j] > tmpArr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = tmpArr[j];
                tmpArr[j] = tmpArr[j + 1];
                tmpArr[j + 1] = tmpArr;
            }
        }
    }
    console.log(tmpArr);
};
