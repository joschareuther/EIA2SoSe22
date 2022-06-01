namespace StrandClasses {

    export class Jellyfish {
        position: Vector;
        color: string;
        dx: number;


        constructor(_position: Vector, _color: string, _dx: number) {
            this.position = _position;
            this.color = _color;
            this.dx = _dx;
        }

        draw(): void {
            console.log("Jellyfish", this.position.y, this.position.x);
            let x: number = this.position.x;
            let y: number = this.position.y;

            crc2.save();
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.arc(x, y, 6, 3, 6);
            crc2.closePath();
            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(x - 3, y);
            crc2.lineTo(x + 6, y + 10);

            crc2.moveTo(x, y);
            crc2.lineTo(x + 9, y + 10);

            crc2.moveTo(x + 3, y - 1);
            crc2.lineTo(x + 12, y + 10);
            crc2.stroke();

        }


        swim(): void {
            console.log("Jellyfish swim!", this.position.x);
            this.position.x += 5;
            this.draw();
            if (this.position.x > width || this.position.x < 0) {
                this.dx = - this.dx;
            }
        }
    }
}