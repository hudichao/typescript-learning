
function keyboardInput(event: KeyboardEvent) {
    // PRESS LEFT ARROW OR 'A' KEY
    if (event.keyCode == 37 || event.keyCode == 65) {
        space_ship.turnLeft();
    }
    // PRESS UP ARROW OR 'W' KEY
    else if (event.keyCode == 38 || event.keyCode == 87) {
        space_ship.accelerate();
    }
    // PRESS RIGHT ARROW OR 'D' KEY
    else if (event.keyCode == 39 || event.keyCode == 68) {
        space_ship.turnRight();
    }
    // PRESS DOWN ARROW OR 'S' KEY
    else if (event.keyCode == 40 || event.keyCode == 83) {
        space_ship.decelerate();
    }

    // PRESS SPACE BAR
    else if (event.keyCode == 32) {
        if (bulletWait > 0) {
            return;
        }
        bulletWait = 0.5;
        var bullet: app.cBullet;
        for (var i: number = 0; i < bullet_array.length; i++) {
            bullet = bullet_array[i];
            if (bullet.active == false) {
                break;
            }
        }
        if (bullet == null || bullet.active == true) {
            bullet = new app.cBullet(space_ship.x, space_ship.y, 3);
            bullet_array.push(bullet);
        }
        else {
            bullet.x = space_ship.x;
            bullet.y = space_ship.y;
            bullet.active = true;
        }
        bullet.launch(space_ship.orientation);
    }
}



var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var bullet_array: Array<app.cBullet> = new Array<app.cBullet>();
var bulletWait = 0;
var deltaTime = 0;
var lastTime = 0;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    var shape: app.iShape;
    for (var i: number = 0; i < shape_array.length; i++) {
        shape = shape_array[i];
        shape.draw();
    }
    asteroid.draw();
    space_ship.draw();

    var bullet:app.cBullet;

    deltaTime = (new Date().getTime() - lastTime) / 1000;
    lastTime = Date.now();
    if (bulletWait> 0) {
        bulletWait -= deltaTime;
    }
    for (var i = 0; i < bullet_array.length; i++) {
        bullet = bullet_array[i];
        bullet.draw();
    }
}
var shape_array: Array<app.iShape> = new Array<app.iShape>();
var asteroid: app.cAsteroid;
var space_ship: app.cSpaceShip;

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // shape_array.push(new cAsteroid());
    // shape_array.push(new cAsteroid());
    // shape_array.push(new cAsteroid());
    // shape_array.push(new cAsteroid());
    // shape_array.push(new cAsteroid());

    // shape_array.push(new cCircle(20, 50, 30));
    // shape_array.push(new cCircle(120, 70, 50));

    shape_array.push(new app.cRectangle(500, 500, 80, 60));
    space_ship = new app.cSpaceShip(200, 450, 5);
    asteroid = new app.cAsteroid();
    asteroid.velocityX = 0;
    asteroid.velocityY = 0;

    document.addEventListener('keydown', keyboardInput);

    gameLoop();
}
