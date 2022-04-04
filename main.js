// get all keys
const keys = document.querySelectorAll(".key");

// play note
function playNote(event) {

    // pegar keyCode
    let audioKeyCode = getKeyCode(event);
    // pegar tecla digitada ou tecla pressionada
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // verificar se a tecla existe 
    const cantFoundAnyKey = !key;

    if (cantFoundAnyKey) {
        return;
    };
    addPlayingClass(key)
    playAudio(audioKeyCode);

};

function addPlayingClass(key) {
    key.classList.add('playing');
};

function getKeyCode(event) {
    let keyCode; // inicia vazia

    const isKeyBoard = event.type === "keydown"; // verdadeiro ou falso
    if (isKeyBoard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    };
    return keyCode;
};

// play audio 
function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play();
};

function removePlayingClass(event) {
    event.target.classList.remove("playing");
};

function registerEventes() {
    // click with mouse
keys.forEach(function (key) {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass)
});


// keyboard type 
window.addEventListener("keydown", playNote);
};

window.addEventListener("load", registerEventes);