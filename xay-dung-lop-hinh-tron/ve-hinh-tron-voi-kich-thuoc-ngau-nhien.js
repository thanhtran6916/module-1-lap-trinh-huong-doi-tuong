class ArcRandum {
    x;
    y;
    radius;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.floor(Math.random()*80);
    }
    darwArc() {
        let canvas = document.getElementById("canvas");
        let canvasRandumArc = canvas.getContext("2d");
        canvasRandumArc.beginPath();
        canvasRandumArc.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        canvasRandumArc.stroke();
    }
}
let myRandumArc = new ArcRandum(150, 150);
myRandumArc.darwArc();
console.log(myRandumArc.radius);
