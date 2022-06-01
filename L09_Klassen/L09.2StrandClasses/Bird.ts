namespace StrandClasses {

    export class Bird {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(): void {
            console.log("Birds");
            let horizon: number = height * golden;

            for (let nBirds: number = 0; nBirds < 8; nBirds++) {

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
        }

        fly(): void {
            console.log("Möwe flieg!");
        }


    }
}