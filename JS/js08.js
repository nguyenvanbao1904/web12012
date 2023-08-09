let input = document.getElementById("input");
let submit = document.getElementById("submit");
let rs = document.getElementById("rs");

submit.addEventListener("click", () => {
    input.value = input.value.trim();
    let char = document.createElement("p");
    char.innerText = `Characters: ${input.value.length}`;
    rs.appendChild(char);

    let tmpArr = input.value.split(" ");
    let words = document.createElement("p");
    words.innerText = `Words: ${tmpArr.length}`;
    rs.appendChild(words);

    let asciiArr = new Array(256).fill(0);
    tmpArr = input.value.split("");
    for (let i = 0; i < tmpArr.length; i++) {
        asciiArr[tmpArr[i].charCodeAt()] += 1;
    }

    for (let i = 0; i < asciiArr.length; i++) {
        if (asciiArr[i] != 0 && i != 32) {
            let tmp = document.createElement("p");
            tmp.innerText = `Character \'${String.fromCharCode(i)}\': ${
                asciiArr[i]
            }`;
            rs.appendChild(tmp);
        }
    }
});
