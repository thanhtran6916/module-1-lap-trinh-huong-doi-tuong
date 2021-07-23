let myPikachu = new Pikachu(150, 150, 500, 200);
// let figurePikachu = document.getElementById("game").value;
// figurePikachu += myPikachu.figureElement();
function start() {
    document.getElementById("game").innerHTML = myPikachu.figureElement();
}

start();

function move() {
    switch (event.keyCode) {
        case 37:
            myPikachu.runLeft();
            break;
        case 38:
            myPikachu.runUp();
            break;
        case 39:
            myPikachu.runRight();
            break;
        case 40:
            myPikachu.runDown();
            break;
    }
    start();
}

window.addEventListener("keydown", move)