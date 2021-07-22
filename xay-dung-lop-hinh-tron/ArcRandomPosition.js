class ArcRandomPosition {
    x;
    y;
    radius;
    color;
    constructor(radius) {
        this.radius = radius;
        this.x = this.xRandom();
        this.y = this.yRandom();
        this.color = this.colorRandom();
    }
    xRandom() {
        return Math.floor(Math.random()*400);
    }
    yRandom() {
        return Math.floor(Math.random()*400);
    }
    colorRandom() {
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        return "rgb(" + red + "," + green + "," + blue + ")";
    }
    darwArc() {
        let canvas = document.getElementById("canvas");
        let canvasArcRandomPosition = canvas.getContext("2d");
        canvasArcRandomPosition.beginPath();
        canvasArcRandomPosition.fillStyle = this.color;
        canvasArcRandomPosition.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        canvasArcRandomPosition.fill();
    }
}
let myArcRandomPosition = new ArcRandomPosition(30);
myArcRandomPosition.darwArc();
