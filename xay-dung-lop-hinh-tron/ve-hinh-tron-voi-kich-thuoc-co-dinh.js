class Arc {
    x;
    y;
    radius;
    constructor(radius, x, y) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    darwArc() {
        let canvas = document.getElementById("canvas");
        let canvasArc = canvas.getContext("2d");
        canvasArc.beginPath();
        canvasArc.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        canvasArc.fill();
    }
}
let myArc = new Arc(40,200, 200);
myArc.darwArc();