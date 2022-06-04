namespace L10_OldMacDonaldsFarm {

    export class Chicken extends Animal {

        doSpecialAction(): void {
            console.log("increase apple");
            apple += 2;
        }

        draw(): void {
            console.log("draw Chicken");

            let chickencanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Chicken");
            if (!chickencanvas)
                return;
            crc2 = <CanvasRenderingContext2D>chickencanvas.getContext("2d");

            crc2.save();
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.arc(100, 80, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();

            crc2.fillStyle = "bisque";
            crc2.fill();

            crc2.fillStyle = "black";
            crc2.fillRect(110, 65, 8, 8);
            crc2.fillRect(80, 65, 8, 8);
            crc2.fillStyle = "white";
            crc2.fillRect(110, 65, 3, 4);
            crc2.fillRect(80, 65, 3, 4);
            crc2.fillStyle = "brown";
            crc2.fillRect(95, 85, 8, 15);

        }

    }

}