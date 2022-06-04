namespace L10_OldMacDonaldsFarm {

    export class Cow extends Animal {

        doSpecialAction(): void {
            console.log("increase corn");
            corn += 2;
        }

        draw(): void {
            console.log("draw Cow");

            let cowcanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Cow");
            if (!cowcanvas)
                return;
            crc2 = <CanvasRenderingContext2D>cowcanvas.getContext("2d");

            crc2.save();
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.arc(100, 80, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();


            crc2.fillStyle = "brown";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(99, 100, 10, 30, 1.5 * Math.PI);
            crc2.moveTo(130, 100);
            crc2.stroke();
            crc2.fill();

            crc2.fillStyle = "black";
            crc2.fillRect(110, 65, 8, 8);
            crc2.fillRect(80, 65, 8, 8);
            crc2.fillRect(90, 85, 18, 15);

            crc2.fillStyle = "white";
            crc2.fillRect(110, 65, 3, 4);
            crc2.fillRect(80, 65, 3, 4);

        }

    }

}