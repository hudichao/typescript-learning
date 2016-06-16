var cCircle = (function () {
    function cCircle(x, y, radius, color, lineWidth) {
        var _this = this;
        if (color === void 0) { color = "red"; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        };
    }
    return cCircle;
}());
var cRectangle = (function () {
    function cRectangle(x, y, width, height, color, lineWidth) {
        var _this = this;
        if (color === void 0) { color = "blue"; }
        if (lineWidth === void 0) { lineWidth = 5; }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = lineWidth;
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.rect(_this.x, _this.y, _this.width, _this.height);
            ctx.stroke();
            ctx.restore();
        };
    }
    return cRectangle;
}());
var cPoint = (function () {
    function cPoint(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return cPoint;
}());
var canvas;
var ctx;
var circle1 = new cCircle(200, 300, 50);
var circle2 = new cCircle(400, 550, 150, "blue", 5);
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    var shape;
    for (var i = 0; i < shape_array.length; i++) {
        shape = shape_array[i];
        shape.draw();
    }
}
var shape_array = new Array();
window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    shape_array.push(new cAsteroid());
    shape_array.push(new cAsteroid());
    shape_array.push(new cAsteroid());
    shape_array.push(new cAsteroid());
    shape_array.push(new cAsteroid());
    shape_array.push(new cCircle(20, 50, 30));
    shape_array.push(new cCircle(120, 70, 50));
    shape_array.push(new cRectangle(500, 500, 80, 60));
    gameLoop();
};
var cAsteroid = (function () {
    function cAsteroid(x, y, size, color, line_width) {
        var _this = this;
        if (x === void 0) { x = undefined; }
        if (y === void 0) { y = undefined; }
        if (size === void 0) { size = undefined; }
        if (color === void 0) { color = "white"; }
        if (line_width === void 0) { line_width = 2; }
        this.x = 0;
        this.y = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.lineWidth = 5;
        this.color = "white";
        this.size = 20;
        this.rotation = 0;
        this.rotationSpeed = 0;
        this.pointList = new Array();
        this.draw = function () {
            _this.x += _this.velocityX;
            _this.y += _this.velocityY;
            if (_this.x < -_this.size * 2) {
                _this.x = 1280 + _this.size * 2;
            }
            else if (_this.x > 1280 + _this.size * 2) {
                _this.x = -2 * _this.size;
            }
            if (_this.y < -_this.size * 2) {
                _this.y = 720 + _this.size * 2;
            }
            else if (_this.y > 720 + _this.size * 2) {
                _this.y = -2 * _this.size;
            }
            _this.rotation += _this.rotationSpeed;
            ctx.save();
            ctx.translate(_this.x, _this.y);
            ctx.rotate(_this.rotation);
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.moveTo(_this.pointList[_this.pointList.length - 1].x, _this.pointList[_this.pointList.length - 1].y);
            for (var i = 0; i < _this.pointList.length; i++) {
                ctx.lineTo(_this.pointList[i].x, _this.pointList[i].y);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        };
        if (x == undefined) {
            this.x = Math.round(Math.random() * 1280);
        }
        else {
            this.x = x;
        }
        if (y == undefined) {
            this.y = Math.round(Math.random() * 720);
        }
        else {
            this.y = y;
        }
        if (size == undefined) {
            this.size = Math.ceil(Math.random() * 10) + 4;
        }
        else {
            this.size = size;
        }
        this.velocityX = Math.round(Math.random() * 4 - 2);
        this.velocityY = Math.round(Math.random() * 4 - 2);
        this.rotationSpeed = Math.random() * 0.06 - 0.03;
        var xrand = 0;
        var yrand = 0;
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand, yrand + 3 * this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand - 1 * this.size, yrand + 2 * this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand - 2 * this.size, yrand + 2 * this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand - 3 * this.size, yrand + this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand - 4 * this.size, yrand));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand - 1 * this.size, yrand - 3 * this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand + 2 * this.size, yrand - 4 * this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand + 2 * this.size, yrand - 3 * this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand + 4 * this.size, yrand - 2 * this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand + 4 * this.size, yrand + this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.pointList.push(new cPoint(xrand + 3 * this.size, yrand + 2 * this.size));
        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);
        this.color = color;
        this.lineWidth = line_width;
    }
    return cAsteroid;
}());
