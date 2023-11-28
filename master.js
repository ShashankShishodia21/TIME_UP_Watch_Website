let navMenu = document.getElementById('nav-menu');

const openNav = () => {
    navMenu.style.display = 'block';
}


const closeNav = () => {
    navMenu.style.display = 'none';
}

var crsr = document.querySelector(".cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})