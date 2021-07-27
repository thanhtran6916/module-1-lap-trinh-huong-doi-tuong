let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let myCar = new Car(60, 450, 30, 50);
let myObstacle = new Obstacle(25, 15, 15);
let myObstacle1 = new Obstacle(75,-100, 15);
let myObstacle2 = new Obstacle(125, -250, 15);
let myPoint = 0;

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
    myObstacle1.drawObstacle(ctx);
    myObstacle2.drawObstacle(ctx);
}

function moveObstacle() {
    if (myObstacle.y >= 500) {
        myObstacle.y = - Math.floor(Math.random()*300);
        myPoint++;
    }

    if (myObstacle1.y >= 500) {
        myObstacle1.y = - Math.floor(Math.random()*500);
        myPoint++;
    }

    if (myObstacle2.y >= 500) {
        myObstacle2.y = - Math.floor(Math.random()*150);
        myPoint++;
    }

    document.getElementById("point").innerHTML = myPoint;
    gameOver(myCar, myObstacle);
    gameOver(myCar, myObstacle1);
    gameOver(myCar, myObstacle2);
    clearCanvas();
    drawCanvas();
    myCar.drawCar(ctx);
    myObstacle.drawObstacle(ctx);
    myObstacle.moveDown();
    myObstacle1.drawObstacle(ctx);
    myObstacle1.moveDown();
    myObstacle2.drawObstacle(ctx);
    myObstacle2.moveDown();
}

function gameOver(car, obstacle) {
    if ((car.x <= obstacle.x && obstacle.x <= car.x + car.width) &&
        (car.y <= obstacle.y + obstacle.radius && obstacle.y + obstacle.radius <= car.y + car.height)) {
        location.reload();
        alert("Game Over!");
    }

    if ((car.x <= obstacle.x && obstacle.x <= car.x + car.width) &&
        (car.y <= obstacle.y - obstacle.radius && obstacle.y - obstacle.radius <= car.y + car.height)) {
        location.reload();
        alert("Game Over!");
    }
}

drawCanvas();
myCar.drawCar(ctx);
document.addEventListener("keydown", moveCar);
setInterval(moveObstacle, 2);