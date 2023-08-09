let box = document.getElementById("box");
let text = document.getElementById("text");
let contentInput =document.getElementById("contentInput");
let backgroundColorInput =document.getElementById("backgroundColorInput");
let textColorInput =document.getElementById("textColorInput");
let submit = document.getElementById("submit");

submit.addEventListener("click", ()=>{
    box.style.backgroundColor = backgroundColorInput.value;
    box.style.color = textColorInput.value;
    text.innerText = contentInput.value;
})
