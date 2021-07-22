class ArcRandomColor {
    x;
    y;
    radius;
    color;
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = this.getRandomColor();
    }
    getRandomColor() {
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        return "rgb(" + red + "," + green + "," + blue + ")";
    }
    darwArc() {
        let canvas = document.getElementById("canvas");
        let canvasRandomColor = canvas.getContext("2d");
        canvasRandomColor.beginPath();
        canvasRandomColor.fillStyle = this.color;
        canvasRandomColor.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        canvasRandomColor.fill();
    }
}
let myArcRandomColor = new ArcRandomColor(200, 200, 50);
myArcRandomColor.darwArc();
console.log(myArcRandomColor.getRandomColor());