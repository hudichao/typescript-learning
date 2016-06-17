module app {
    export class cSpaceShip implements iShape {
        public velocity: cVector = new cVector(0, 0);
        public orientation: cVector = new cVector(1, 0);
        public maxSpeedSQ: number = 100;
        private _maxSpeed: number = 10;
        public acceleration: number = 0.2;
        public x: number = 0;
        public y: number = 0;
        public lineWidth: number = 5;
        public color: string = "white";
        public size: number = 20;
        public rotation: number = 0;
        public pointList: Array<cVector> = new Array<cVector>();

        private _tempPoint: cVector = new cVector(0, 0);

        public accelerate(): void {
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
        }

        public decelerate(): void {
            this.velocity.multiply(0.9);

            if (this.velocity.magSq() < 1) {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
        }

        get maxSpeed(): number {
            return Math.sqrt(this.maxSpeedSQ);
        }

        set maxSpeed(value: number) {
            this._maxSpeed = value;
            this.maxSpeedSQ = value * value;
        }

        public draw = (): void => {
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            if (this.x < -this.size * 2) {
                this.x = 1280 + this.size * 2;
            }
            else if (this.x > 1280 + this.size * 2) {
                this.x = -2 * this.size;
            }

            if (this.y < -this.size * 2) {
                this.y = 720 + this.size * 2;
            }
            else if (this.y > 720 + this.size * 2) {
                this.y = -2 * this.size;
            }
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.beginPath();

            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;

            ctx.moveTo(this.pointList[this.pointList.length - 1].x, this.pointList[this.pointList.length - 1].y);

            for (var i: number = 0; i < this.pointList.length; i++) {
                ctx.lineTo(this.pointList[i].x, this.pointList[i].y);
            }

            ctx.closePath();

            ctx.stroke();
            ctx.restore();
        }

        public turnLeft = (): void => {
            this.rotation -= 0.1;
            if (this.rotation < 0) {
                this.rotation += Math.PI * 2;
            }
            this.orientation.x = 1;
            this.orientation.y = 0;
            this.orientation.rotate(-this.rotation);
        }

        public turnRight = (): void => {
            this.rotation += 0.1;
            this.rotation %= Math.PI * 2;
            this.orientation.x = 1;
            this.orientation.y = 0;
            this.orientation.rotate(-this.rotation);
        }

        constructor(x: number, y: number, size: number, color: string = "white", line_width: number = 2) {
            this.x = x;
            this.y = y;
            this.size = size;

            this.pointList.push(new cVector(3 * size, 0));
            this.pointList.push(new cVector(-2 * size, -2 * size));
            this.pointList.push(new cVector(-1 * size, 0));
            this.pointList.push(new cVector(-2 * size, 2 * size));

            this.color = color;
            this.lineWidth = line_width;
        }

    }
}