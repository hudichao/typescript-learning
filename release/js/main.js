var app;
(function (app) {
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
            this.pointList.push(new app.cPoint(xrand, yrand + 3 * this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand - 1 * this.size, yrand + 2 * this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand - 2 * this.size, yrand + 2 * this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand - 3 * this.size, yrand + this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand - 4 * this.size, yrand));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand - 1 * this.size, yrand - 3 * this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand + 2 * this.size, yrand - 4 * this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand + 2 * this.size, yrand - 3 * this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand + 4 * this.size, yrand - 2 * this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand + 4 * this.size, yrand + this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.pointList.push(new app.cPoint(xrand + 3 * this.size, yrand + 2 * this.size));
            xrand = Math.round(Math.random() * this.size - this.size / 2);
            yrand = Math.round(Math.random() * this.size - this.size / 2);
            this.color = color;
            this.lineWidth = line_width;
        }
        return cAsteroid;
    }());
    app.cAsteroid = cAsteroid;
})(app || (app = {}));
var app;
(function (app) {
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
    app.cCircle = cCircle;
})(app || (app = {}));
var app;
(function (app) {
    var cPoint = (function () {
        function cPoint(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        return cPoint;
    }());
    app.cPoint = cPoint;
})(app || (app = {}));
var app;
(function (app) {
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
    app.cRectangle = cRectangle;
})(app || (app = {}));
var app;
(function (app) {
    var cSpaceShip = (function () {
        function cSpaceShip(x, y, size, color, line_width) {
            var _this = this;
            if (color === void 0) { color = "white"; }
            if (line_width === void 0) { line_width = 2; }
            this.velocity = new app.cVector(0, 0);
            this.orientation = new app.cVector(1, 0);
            this.maxSpeedSQ = 100;
            this._maxSpeed = 10;
            this.acceleration = 0.2;
            this.x = 0;
            this.y = 0;
            this.lineWidth = 5;
            this.color = "white";
            this.size = 20;
            this.rotation = 0;
            this.pointList = new Array();
            this._tempPoint = new app.cVector(0, 0);
            this.draw = function () {
                _this.x += _this.velocity.x;
                _this.y += _this.velocity.y;
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
            this.turnLeft = function () {
                _this.rotation -= 0.1;
                if (_this.rotation < 0) {
                    _this.rotation += Math.PI * 2;
                }
                _this.orientation.x = 1;
                _this.orientation.y = 0;
                _this.orientation.rotate(-_this.rotation);
            };
            this.turnRight = function () {
                _this.rotation += 0.1;
                _this.rotation %= Math.PI * 2;
                _this.orientation.x = 1;
                _this.orientation.y = 0;
                _this.orientation.rotate(-_this.rotation);
            };
            this.x = x;
            this.y = y;
            this.size = size;
            this.pointList.push(new app.cVector(3 * size, 0));
            this.pointList.push(new app.cVector(-2 * size, -2 * size));
            this.pointList.push(new app.cVector(-1 * size, 0));
            this.pointList.push(new app.cVector(-2 * size, 2 * size));
            this.color = color;
            this.lineWidth = line_width;
        }
        cSpaceShip.prototype.accelerate = function () {
            if (this.velocity.x == 0 && this.velocity.y == 0) {
                this.velocity.copy(this.orientation);
                this.velocity.multiply(this.acceleration);
            }
            this._tempPoint.copy(this.orientation);
            this._tempPoint.multiply(this.acceleration);
            this.velocity.add(this._tempPoint);
            if (this.velocity.magSq() >= this.maxSpeedSQ) {
                this.velocity.multiply(this.maxSpeed / this.velocity.magnitude());
            }
        };
        cSpaceShip.prototype.decelerate = function () {
            this.velocity.multiply(0.9);
            if (this.velocity.magSq() < 1) {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
        };
        Object.defineProperty(cSpaceShip.prototype, "maxSpeed", {
            get: function () {
                return Math.sqrt(this.maxSpeedSQ);
            },
            set: function (value) {
                this._maxSpeed = value;
                this.maxSpeedSQ = value * value;
            },
            enumerable: true,
            configurable: true
        });
        return cSpaceShip;
    }());
    app.cSpaceShip = cSpaceShip;
})(app || (app = {}));
var app;
(function (app) {
    var cVector = (function () {
        function cVector(x, y) {
            var _this = this;
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = 0;
            this.y = 0;
            this.magnitude = function () {
                return Math.sqrt(_this.x * _this.x + _this.y * _this.y);
            };
            this.magSq = function () {
                return _this.x * _this.x + _this.y * _this.y;
            };
            this.normalize = function (magnitude) {
                if (magnitude === void 0) { magnitude = 1; }
                var len = Math.sqrt(_this.x * _this.x + _this.y * _this.y);
                _this.x /= len;
                _this.y /= len;
                return _this;
            };
            this.zero = function () {
                _this.x = 0;
                _this.y = 0;
            };
            this.copy = function (point) {
                _this.x = point.x;
                _this.y = point.y;
            };
            this.rotate = function (radians) {
                var cos = Math.cos(radians);
                var sin = Math.sin(radians);
                var x = (cos * _this.x) + (sin * _this.y);
                var y = (cos * _this.y) - (sin * _this.x);
                _this.x = x;
                _this.y = y;
            };
            this.getAngle = function () {
                return Math.atan2(_this.y, _this.x);
            };
            this.multiply = function (value) {
                _this.x *= value;
                _this.y *= value;
            };
            this.add = function (value) {
                _this.x += value.x;
                _this.y += value.y;
            };
            this.subtract = function (value) {
                _this.x -= value.x;
                _this.y -= value.y;
            };
            this.x = x;
            this.y = y;
        }
        return cVector;
    }());
    app.cVector = cVector;
})(app || (app = {}));
function keyboardInput(event) {
    if (event.keyCode == 37 || event.keyCode == 65) {
        space_ship.turnLeft();
    }
    else if (event.keyCode == 38 || event.keyCode == 87) {
        space_ship.accelerate();
    }
    else if (event.keyCode == 39 || event.keyCode == 68) {
        space_ship.turnRight();
    }
    else if (event.keyCode == 40 || event.keyCode == 83) {
        space_ship.decelerate();
    }
}
var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    var shape;
    for (var i = 0; i < shape_array.length; i++) {
        shape = shape_array[i];
        shape.draw();
    }
    asteroid.draw();
    space_ship.draw();
}
var shape_array = new Array();
var asteroid;
var space_ship;
window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    shape_array.push(new app.cRectangle(500, 500, 80, 60));
    space_ship = new app.cSpaceShip(200, 450, 5);
    asteroid = new app.cAsteroid();
    asteroid.velocityX = 0;
    asteroid.velocityY = 0;
    document.addEventListener('keydown', keyboardInput);
    gameLoop();
};
