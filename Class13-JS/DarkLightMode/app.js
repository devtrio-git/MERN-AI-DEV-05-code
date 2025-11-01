console.log("Hello, World!");
function darkMode() {
    let container = document.getElementById("container");
    let lightImg = document.getElementById("lightImg");
    let darkImg = document.getElementById("darkImg");

    container.style.backgroundColor = "black";
    container.style.color = "white";

    darkImg.style.display = "none";
    lightImg.style.display = "inline";
}

function lightMode() {
    let container = document.getElementById("container");
    let lightImg = document.getElementById("lightImg");
    let darkImg = document.getElementById("darkImg");

    container.style.backgroundColor = "white";
    container.style.color = "black";

    darkImg.style.display = "inline";
    lightImg.style.display = "none";
}