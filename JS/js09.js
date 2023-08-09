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

    for(let i = 0; i< tmpArr.length; i++){
        tmpArr[i] = Number(tmpArr[i]);
    }

    for(let i = 0; i < tmpArr.length-1; i++){
        for(let j = i + 1; j < tmpArr.length; j++){
           if(tmpArr[i] > tmpArr[j]){
                let tmp = tmpArr[i];
                tmpArr[i] = tmpArr[j];
                tmpArr[j] = tmp;
           }
        }
    }

    let Arr = document.createElement("p");
    Arr.innerText = `Mảng tăng dần: ${tmpArr}`;
    rs.appendChild(Arr);
};

const sortDow = () => {
    let tmpArr = stringRs.split("    ");

    for(let i = 0; i< tmpArr.length; i++){
        tmpArr[i] = Number(tmpArr[i]);
    }

    for(let i = 0; i < tmpArr.length-1; i++){
        for(let j = i + 1; j < tmpArr.length; j++){
           if(tmpArr[i] < tmpArr[j]){
                let tmp = tmpArr[i];
                tmpArr[i] = tmpArr[j];
                tmpArr[j] = tmp;
           }
        }
    }

    let Arr = document.createElement("p");
    Arr.innerText = `Mảng Giảm dần: ${tmpArr}`;
    rs.appendChild(Arr);
};
