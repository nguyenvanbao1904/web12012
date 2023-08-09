let size = document.getElementsByName("size");
let form = document.getElementById("form");
let img = document.getElementsByTagName("img")
form.addEventListener('change',()=>{
    for(let i = 0; i < size.length; i++){
        if(size[i].checked){
            img[0].style.width = `${size[i].value}%`;
        }
    }
})
