namespace L10_2StrandPolymorphie {

    export class Bird {
        position: Vector;
        dx: number;

        constructor(_position: Vector, _dx: number) {
            this.position = _position;
            this.dx = _dx;
        }

        draw(): void {
            console.log("Bird");
            let horizon: number = height * golden;

            crc2.save();
            crc2.translate(getRandom(0, 60), getRandom(60, 100) - horizon);
            crc2.beginPath();
            crc2.arc(100, 70, 4, 3.3, 0);
            crc2.arc(100 + 7, 70, 4, 3.4, 0);
            crc2.fillStyle = "HSLA(0, 0%, 100%, 1";
            crc2.fill();

            crc2.stroke();
            crc2.restore();


        }

        fly(): void {
            console.log("Möwe flieg!");
            this.position.x += this.dx;
            this.draw();
            if (this.position.x > height + 300 || this.position.x < 0) {
                this.dx = - this.dx;
            }
        }
    }
}