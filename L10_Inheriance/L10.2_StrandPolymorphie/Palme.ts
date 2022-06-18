namespace L10_2StrandPolymorphie {

    export class Palme {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(): void {
            console.log("Palme");
            let x: number;
            let y: number;
            for (let nPalmos: number = 0; nPalmos < 4; nPalmos++) {

                crc2.fillStyle = "brown";
                crc2.fillRect(x = getRandom(5, 70), y = getRandom(90, 110), 5, 15);

                crc2.beginPath();
                crc2.arc(x, y + 30, 30, 180, 30);
                crc2.fillStyle = "green";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x + 20, y + 25, 30, 180, 30);
                crc2.fillStyle = "green";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x + 18, y + 1, 15, Math.PI, Math.PI * 1.5);
                crc2.fillStyle = "green";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.6, true);
                crc2.fillStyle = "green";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x - 6, y + 9, 14, Math.PI * 1.8, Math.PI * 1.3, true);
                crc2.fillStyle = "green";
                crc2.fill();
            }
        }
    }
}