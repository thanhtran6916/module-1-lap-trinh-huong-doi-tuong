class Nobita {
    width;
    height;
    positionX;
    possitionY;
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.positionX = x;
        this.possitionY = y;
    }
    moveUp() {
        this.possitionY -= 20;
    }
    moveDown() {
        this.possitionY += 20;
    }
    moveLeft() {
        this.positionX -= 20;
    }
    moveRight() {
        this.positionX += 20;
    }
    figureElemen() {
        return `<img id="nobita" src="./bong-da-dong-luc-fifa-uhv-207.07.jpg" 
                style="position:absolute; left:${this.positionX}px; top:${this.possitionY}px;"
                height="${this.height}" width="auto"/>`
    }
}

let myNobita = new Nobita(100, 100,0,0);
function start() {
    document.getElementById("game").innerHTML = myNobita.figureElemen();
}
start();

function move() {
    switch (event.keyCode) {
        case 37:
            myNobita.moveLeft();
            break;
        case 38:
            myNobita.moveUp();
            break;
        case 39:
            myNobita.moveRight();
            break;
        case 40:
            myNobita.moveDown();
            break;
    }
    start();
}
window.addEventListener("keydown", move);