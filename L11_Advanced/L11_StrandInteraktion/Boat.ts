namespace L11_2StrandInteraktion {

    export class Boat {
        position: Vector;
        dx: number;

        constructor(_position: Vector, _dx: number) {
            this.position = _position;
            this.dx = _dx;
        }

     draw(): void {
        console.log("Boat", this.position.x, this.position.y);


        crc2.beginPath();
        crc2.moveTo(this.position.x - 10, this.position.y);
        crc2.lineTo(this.position.x - 10, this.position.y - 40);
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(this.position.x + 0, this.position.y + 0);
        crc2.lineTo(this.position.x + 10, this.position.y - 20);
        crc2.lineTo(this.position.x - 40, this.position.y - 20);
        crc2.lineTo(this.position.x - 30, this.position.y);
        crc2.closePath();
        crc2.stroke();

        crc2.fillStyle = "#5c2a10";
        crc2.fill();

        crc2.fillStyle = "lightgrey";
        crc2.fillRect(this.position.x - 30, this.position.y - 17, 3, 4);
        crc2.fillRect(this.position.x, this.position.y - 17, 3, 4);
        crc2.fillRect(this.position.x - 25, this.position.y - 17, 3, 4);
        crc2.fillRect(this.position.x - 20, this.position.y - 17, 3, 4);
        crc2.fillRect(this.position.x - 15, this.position.y - 17, 3, 4);
        crc2.fillRect(this.position.x - 10, this.position.y - 17, 3, 4);

        crc2.beginPath();
        crc2.moveTo(this.position.x - 10, this.position.y - 20);
        crc2.lineTo(this.position.x, this.position.y - 25);
        crc2.lineTo(this.position.x - 10, this.position.y - 40);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ebe4c7";
        crc2.fill();
    }

    swimm(): void {
        console.log("Boat swimm!");
        this.position.x += this.dx;
        if (this.position.x > width || this.position.x < 0) {
        this.dx = - this.dx;
    }
}
    }
}
