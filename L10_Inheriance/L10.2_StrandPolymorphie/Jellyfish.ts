namespace L10_2StrandPolymorphie {

    export class Jellyfish extends Moveable {
        color: string;

        constructor(_position: Vector, _color: string, _dx: number) {
            super();
            this.position = _position;
            this.color = _color;
            this.dx = _dx;
        }

        draw(): void {
            let horizon: number = height * golden;
            let x: number;
            let y: number;


            for (let nJellyfish: number = 0; nJellyfish < 5; nJellyfish++) {
                crc2.save();
                crc2.translate(0, 0);
                crc2.beginPath();
                crc2.arc(x = getRandom(180, 280), y = getRandom(horizon + 30, horizon + 50), getRandom(4, 7), 3, 6);
                crc2.closePath();
                crc2.stroke();

                crc2.fillStyle = "HSLA(0, 100%, 50%, 0.65";
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