var StrandClasses;
(function (StrandClasses) {
    class Boat {
        position;
        dx;
        constructor(_position, _dx) {
            this.position = _position;
            this.dx = _dx;
        }
        draw() {
            console.log("Boat", this.position);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(this.position.x - 10, this.position.y);
            StrandClasses.crc2.lineTo(this.position.x - 10, this.position.y - 40);
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(this.position.x + 0, this.position.y + 0);
            StrandClasses.crc2.lineTo(this.position.x + 10, this.position.y - 20);
            StrandClasses.crc2.lineTo(this.position.x - 40, this.position.y - 20);
            StrandClasses.crc2.lineTo(this.position.x - 30, this.position.y);
            StrandClasses.crc2.closePath();
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = "#5c2a10";
            StrandClasses.crc2.fill();
            StrandClasses.crc2.fillStyle = "lightgrey";
            StrandClasses.crc2.fillRect(this.position.x - 30, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x - 25, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x - 20, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x - 15, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x - 10, this.position.y - 17, 3, 4);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(this.position.x - 10, this.position.y - 20);
            StrandClasses.crc2.lineTo(this.position.x, this.position.y - 25);
            StrandClasses.crc2.lineTo(this.position.x - 10, this.position.y - 40);
            StrandClasses.crc2.closePath();
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = "#ebe4c7";
            StrandClasses.crc2.fill();
        }
        swimm() {
            console.log("Boat swimm!");
            this.position.x += this.dx;
            if (this.position.x > StrandClasses.height || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    StrandClasses.Boat = Boat;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Boat.js.map