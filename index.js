var drum = document.querySelectorAll(".drum");
var drum_length = drum.length;
var audio;
for (i = 0; i < drum_length; i++) {
    drum[i].addEventListener("click", function () {
        sound(this.innerHTML);
    });
}
document.addEventListener("keydown", function (event) {
    sound(event.key);
});

function sound(key) {
    switch (key) {
        case 'w': audio = new Audio("./sounds/crash.mp3"); audio.play();animate(key); break;
        case 'a': audio = new Audio("./sounds/kick-bass.mp3"); audio.play();animate(key); break;
        case 's': audio = new Audio("./sounds/snare.mp3"); audio.play();animate(key); break;
        case 'd': audio = new Audio("./sounds/tom-1.mp3"); audio.play();animate(key); break;
        case 'j': audio = new Audio("./sounds/tom-2.mp3"); audio.play();animate(key); break;
        case 'k': audio = new Audio("./sounds/tom-3.mp3"); audio.play();animate(key); break;
        case 'l': audio = new Audio("./sounds/tom-4.mp3"); audio.play();animate(key); break;
        default: console.log("unkown key");
    }
}
function animate(letter){
    var pressed = document.querySelector("."+letter);
    pressed.classList.add("pressed");
    setTimeout(function (){
        pressed.classList.remove("pressed");
    },140);
}