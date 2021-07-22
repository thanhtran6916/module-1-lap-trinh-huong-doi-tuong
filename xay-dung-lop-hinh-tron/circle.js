class Circle {
    radius;
    color;
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    cricle() {}
    getRadius() {
        return this.radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

let myCricle = new Circle(8, "red");
document.write("Bán kính hình tròn " + myCricle.getRadius() + " có diện tích là " + myCricle.getArea());
let yourCricle = new Circle(6, "red");
document.write("Bán kính hình tròn " + yourCricle.getRadius() + " có diện tích là " + yourCricle.getArea());