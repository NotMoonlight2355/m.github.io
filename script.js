const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});


var icon = document.getElementById("dark");
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}


let localData = localStorage.getItem("theme");

if (localData == "light") {
    icon.src = "moon.png";
    document.body.classList.remove("dark-mode");
} else if (localData == "dark") {
    icon.src = "sun.png";
    document.body.classList.add("dark-mode")
}
dark.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        icon.src = "sun.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "moon.png";
        localStorage.setItem("theme", "light");
    }
}