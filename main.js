let img = document.querySelector("img");
let input = document.querySelector("input")
img.addEventListener("click", function(){
    input.classList.toggle("active")
    img.classList.toggle("active-img")
})

