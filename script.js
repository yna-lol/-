const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", function(){
const isOpen = nav.classList.toggle("open");
menuToggle.setAttribute("aria-expanded", String(isOpen));
menuToggle.textContent = isOpen ? "*" : "=";
});
nav.querySelectorAll("a").forEach(function(link){
link.addEventListener("click", function(){
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "=";
});
});
