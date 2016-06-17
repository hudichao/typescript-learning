module app {
    export class cBullet implements iShape {
        public active: boolean = true;
        public x: number = 0;
        public y: number = 0;
        public lineWidth: number = 5;
        public size: number = 0;
        public color: string = "red";

        public lineWidthAnimVal: number = 0;
        public widthUp: boolean = true;

        public velocity: cVector = new cVector();
        public speed: number = 5;

        public launch = (orientation: cVector): void => {
            this.velocity.copy(orientation);
            this.velocity.multiply(this.speed);
        }

        public draw = (): void => {
            if (this.active == false) {
                return;
            }

            if (this.widthUp == true) {
                this.lineWidthAnimVal += 0.1;

                if (this.lineWidthAnimVal >= 2) {
                    this.widthUp = false;
                }
            }
            else {
                this.lineWidthAnimVal -= 0.1;
                if (this.lineWidthAnimVal <= -2) {
                    this.widthUp = true;
                }
            }
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            if (this.x < -10 || this.x > 1290 || this.y < -10 || this.y > 730) {
                this.active = false;
            }

            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth + this.lineWidthAnimVal;
            ctx.rect(this.x, this.y, this.size, this.size);
            ctx.stroke();
            ctx.restore();
        }

        public constructor(x: number, y: number, size: number, color: string = "red", lineWidth: number = 5) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
            this.lineWidth = lineWidth;
        }
    }
}
