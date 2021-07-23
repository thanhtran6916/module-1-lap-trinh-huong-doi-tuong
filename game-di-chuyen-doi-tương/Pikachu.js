class Pikachu {
    width;
    height;
    positionX;
    positionY;

    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.positionX = x;
        this.positionY = y;
    }

    figureElement() {
        return `<img src="./pikachu.png" alt="pikachu" 
                width="${this.width}" height="${this.height}" 
                style="position: absolute; top: ${this.positionY}px;  left: ${this.positionX}px">`
    }

    runLeft() {
        this.positionX -= 20;
    }

    runRight() {
        this.positionX += 20;
    }

    runUp() {
        this.positionY -= 20;
    }

    runDown() {
        this.positionY += 20;
    }
}