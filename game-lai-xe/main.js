let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let myCar = new Car(60, 450, 30, 50);
let myObstacle = new Obstacle(25, 15, 15);

function drawCanvas() {
    ctx.beginPath()
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.moveTo(50, 0);
    ctx.lineTo(50, 500)
    ctx.stroke();
    ctx.beginPath()
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 500)
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, 150, 500);
}

function moveCar() {
    switch (event.keyCode) {
        case 37:
            myCar.moveLeft();
            break;
        case 38:
            myCar.moveUp();
            break;
        case 39:
            myCar.moveRight();
            break;
        case 40:
            myCar.moveDown();
            break;
    }
    clearCanvas();
    drawCanvas();
    myCar.drawCar(ctx);
    myObstacle.drawObstacle(ctx);
}

function moveObstacle() {
    myObstacle.moveDown();
    clearCanvas();
    drawCanvas();
    myCar.drawCar(ctx);
    myObstacle.drawObstacle(ctx);
}

drawCanvas();
myCar.drawCar(ctx);
myObstacle.drawObstacle(ctx);
document.addEventListener("keydown", moveCar);
setInterval(moveObstacle, 100)