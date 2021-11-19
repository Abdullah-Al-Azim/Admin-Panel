var content = document.getElementById("main-class");
var sideBar = document.getElementById("sidebar");
var darkMode = document.getElementById("sun____icon");
var moon = document.querySelector(".moon__icon")
moon.style.display = "none"
darkMode.addEventListener("click", function(){
    content.classList.toggle("night");
    darkMode.style.display = "none"
    moon.style.display = "block"
})

moon.addEventListener("click", function(){
    content.classList.toggle("night");
    moon.style.display = "none"
    darkMode.style.display = "block"
})