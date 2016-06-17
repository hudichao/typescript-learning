module app {
    export class cCircle implements iShape {
        constructor(public x: number, public y: number, public radius: number, public color: string = "red", public lineWidth: number = 2) {
        }
        public draw = (): void => {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        }
    }
}