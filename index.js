const imageEl = document.getElementById("image");

window.addEventListener("scroll",() =>{
    updated ()
})

function updated(){
    imageEl.style.opacity = 1 - pageYOffset/800;
    imageEl.style.backgroundSize = 90 - pageYOffset/ 15 + "%";
}