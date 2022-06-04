namespace L10_OldMacDonaldsFarm {

    export class Dog extends Animal {

        doSpecialAction(): void {
            console.log("increase gras");
            gras += 2;
        }

        draw(): void {
            console.log("draw Dog");

            let dogcanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Dog");
            if (!dogcanvas)
                return;
            crc2 = <CanvasRenderingContext2D>dogcanvas.getContext("2d");
    
            crc2.save();
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.arc(100, 80, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
    
            crc2.fillStyle = "orange";
            crc2.fill();
    
            crc2.fillStyle = "black";
            crc2.fillRect(110, 65, 8, 8);
            crc2.fillRect(80, 65, 8, 8);
            crc2.fillStyle = "white";
            crc2.fillRect(110, 65, 3, 4);
            crc2.fillRect(80, 65, 3, 4);
            crc2.fillStyle = "brown";
            crc2.fillRect(90, 85, 18, 15);
            crc2.fillRect(97, 95, 4, 13);
    
            crc2.beginPath();
            crc2.moveTo(99, 106);
            crc2.lineTo(108, 110);
            crc2.moveTo(99, 105);
            crc2.lineTo(90, 110);
            crc2.stroke();

        }

    }

}