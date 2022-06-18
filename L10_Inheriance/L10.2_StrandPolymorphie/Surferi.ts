namespace L10_2StrandPolymorphie {

    export class Surferi {
        position: Vector;
        color: string;
        clothingcolor: string;
        surfboardcolor: string;

        constructor(_position: Vector, _color: string, _clothingcolor: string, _surfboardcolor: string) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
            this.surfboardcolor = _surfboardcolor;
        }

        draw(): void {
            console.log("Surferi");
            let x: number;
            let y: number;

            crc2.beginPath();
            crc2.ellipse(x = getRandom(100, 160), y = getRandom(100, 120), 3, 10, 20, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = this.surfboardcolor;
            crc2.fill();

            crc2.save();
            crc2.translate(x, y);
            crc2.restore();

            crc2.fillStyle = "rgb(" + getRandom(10, 200) + ", " + getRandom(50, 200) + ", " + getRandom(50, 200) + ", " + 1 + ")";
            crc2.fillRect(x - 4, y - 10, 8, 10);

            crc2.beginPath();
            crc2.arc(x - 16, y - 10, 15, Math.PI * 2, Math.PI * 1.7, true);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(x, y - 12, 5, 0, Math.PI * 2, true);
            crc2.fillStyle = this.color;
            crc2.fill();

        }

        swim(): void {
            console.log("Surferi surft"!);
        }
    }

}