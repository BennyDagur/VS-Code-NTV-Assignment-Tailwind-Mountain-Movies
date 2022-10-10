function dropdown(){
let navbar = document.getElementById('navbar')
if(window.getComputedStyle(navbar).display === "none"){
    navbar.style.display = "flex";
} else {navbar.style.display = "none"}
}