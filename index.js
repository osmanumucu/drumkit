for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}

function playSound() {
    alert("Hi");
}

