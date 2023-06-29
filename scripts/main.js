function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
} 

// footer year
document.querySelector("#year").innerHTML = new Date().getFullYear();