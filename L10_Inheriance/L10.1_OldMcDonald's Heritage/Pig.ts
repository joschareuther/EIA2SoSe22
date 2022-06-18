namespace L10_OldMacDonaldsFarm {

    export class Pig extends Animal {

        constructor (_amount: number) {
            super ("pig", "apple", 4, "Oink");
        }


        doSpecialAction(): void {
            console.log("increase meat");
            meatstorage.innerHTML = String(meat);
            meat += 2;

        }

        draw(): void {
            console.log("draw Pig");

            let pigcanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Pig");
            if (!pigcanvas)
                return;
            crc2 = <CanvasRenderingContext2D>pigcanvas.getContext("2d");

            crc2.save();
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.arc(100, 80, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();

            crc2.fillStyle = "pink";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(98, 97, 13, 30, 1.5 * Math.PI);
            crc2.moveTo(130, 100);
            crc2.stroke();
            crc2.fill();

            crc2.fillStyle = "black";
            crc2.fillRect(110, 65, 8, 8);
            crc2.fillRect(80, 65, 8, 8);
            crc2.fillStyle = "white";
            crc2.fillRect(110, 65, 3, 4);
            crc2.fillRect(80, 65, 3, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(100, 95, 8, 8);
            crc2.fillRect(90, 95, 8, 8);

        }

    }

}