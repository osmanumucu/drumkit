for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

    });
}


document.addEventListener("keydown", function (event) {
    
    makeSound(event.key);

})

function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio('sounds/kaderdegulecekmis.mp3');
            audio.play();  
        break;

        case "a":
            var audio = new Audio('sounds/yesilordek.mp3');
            audio.play();  
        break;

        case "s":
            var audio = new Audio('sounds/ankaralinamik.mp3');
            audio.play();
        break;

        case "d":
            var audio = new Audio('sounds/tesbih.mp3');
            audio.play();  
        break;

        case "j":
            var audio = new Audio('sounds/angara.mp3');
            audio.play();  
        break;

        case "k":
            var audio = new Audio('sounds/hovarda.mp3');
            audio.play();  
        break;

        case "l":
            var audio = new Audio('sounds/bahce.mp3');
            audio.play();  
        break;
    }

}

