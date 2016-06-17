module app {
    export class cRectangle implements iShape {
        constructor(public x: number, public y: number, public width: number, public height: number, public color: string = "blue", public lineWidth: number = 5) {
        }
        public draw = (): void => {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            ctx.restore();
        }
    }
}