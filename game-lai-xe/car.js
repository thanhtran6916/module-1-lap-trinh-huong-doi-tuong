class Car {
    x;
    y;
    width;
    height;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawCar(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }

    moveLeft() {
        if (this.x > 10) {
            this.x -= 50;
        }
    }

    moveRight() {
        if (this.x < 150 - 10 - this.width) {
            this.x += 50;
        }
    }

    moveUp() {
        if (this.y > 10) {
            this.y -= 50;
        }
    }

    moveDown() {
        if (this.y < 500 - this.height)
            this.y += 50;
    }
}