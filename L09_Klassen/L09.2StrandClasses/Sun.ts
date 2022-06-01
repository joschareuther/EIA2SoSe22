namespace StrandClasses {

    export class Sun {
        position: Vector;
        dy: number;

        constructor(_position: Vector, _dy: number) {
            this.position = _position;
            this.dy = _dy;
        }

        draw(): void {
            console.log("Sun");

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 12, 0, 0, 50);

            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        sink(): void {
            console.log("Sink!");
            this.position.y += this.dy;
            if (this.position.y - 50 > height || this.position.y + 50 < 0) {
                this.dy = - this.dy;
            }

        }
    }
}