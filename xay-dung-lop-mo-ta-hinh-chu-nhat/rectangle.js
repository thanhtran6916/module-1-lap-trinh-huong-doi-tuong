class Rectangle {
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
    getArea() {
        return this.width * this.height;
    }
    getPemimeter() {
        return (this.width + this.height) * 2;
    }
    canvasRect() {
        let canvas = document.getElementById("canvas");
        let canvasRect = canvas.getContext("2d");
        canvasRect.beginPath();
        canvasRect.strokeStyle = "green";
        canvasRect.lineWidth = 3;
        canvasRect.rect(this.x, this.y, this.width, this.height);
        canvasRect.stroke();
    }
}
let myRect = new Rectangle(50, 50, 100, 100);
document.write("Diện tích: " + myRect.getArea() + " Chu vi: " + myRect.getPemimeter())
myRect.canvasRect();