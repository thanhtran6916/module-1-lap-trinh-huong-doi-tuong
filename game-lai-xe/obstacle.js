class Obstacle {
    x;
    y;
    radius;
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    drawObstacle(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
    }

    moveDown() {
        this.y += 5;
    }
}