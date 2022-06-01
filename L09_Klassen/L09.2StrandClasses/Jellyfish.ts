namespace StrandClasses {

    export class Jellyfish {
        position: Vector;
        color: string;


        constructor(_position: Vector, _color: string) {
            this.position = _position;
            this.color = _color;

        }

        draw(): void {
            console.log("Jellyfish");
            let horizon: number = height * golden;
            let x: number;
            let y: number;

            crc2.save();
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.arc(x = getRandom(180, 280), y = getRandom(horizon + 30, horizon + 50), getRandom(4, 7), 3, 6);
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
            console.log("Jellyfish swim!");
        }
    }
}